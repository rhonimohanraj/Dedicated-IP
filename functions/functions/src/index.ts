import {logger} from "firebase-functions";
import * as admin from "firebase-admin";
import {auth} from "firebase-functions/v1";
import {getFirestore} from "firebase-admin/firestore";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import {HttpsError, onCall, onRequest} from "firebase-functions/https";
import Stripe from "stripe";
import {generateName, getRandomInt} from "./helper";

admin.initializeApp();

export const onHttpRequest = onRequest(async (req, res) => {
  switch (req.body.requestType) {
  default:
    res.status(400).send("Invalid request type");
  }
});

export const onStripeWebhook = onRequest(async (req, res) => {
  const event: Stripe.Event = req.body;
  switch (event.type) {
  case "checkout.session.completed": {
    const eventData = event.data.object;
    if (
      eventData.mode === "subscription" &&
      eventData.payment_status === "paid"
    ) {
      const firestore = getFirestore();
      const uid = eventData.metadata?.uid;
      if (!uid) {
        throw new Error("UID is undefined in event metadata.");
      }
      const userDoc = firestore.collection("users").doc(uid);
      const serverCollection = userDoc.collection("servers");
      await serverCollection.add({
        countryCode: "de",
        location: "Nuremberg, Germany",
        server: 11,
        datacenter: "nbg1",
        name: generateName() + "-" + getRandomInt(1, 1000),
        username: "admin",
        password: `${getRandomInt(1, 1000)}` +
        "-not-secure-" +
        `${getRandomInt(1, 1000)}`,
        status: "pending",
        createdAt: admin.firestore.Timestamp.now(),
      });
    }
    break;
  }
  default:
    console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send("OK");
});

export const onCreatePaymentLink = onCall({
  enforceAppCheck: true,
  consumeAppCheckToken: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "failed-precondition",
      "The function must be " + "called while authenticated."
    );
  }

  const firestore = getFirestore();
  const userDoc = firestore.collection("users").doc(request.auth.uid);
  const user = await userDoc.get();

  if (!user.exists) {
    throw new HttpsError("not-found", "User not found.");
  }

  if (!user.data()?.stripeUid) {
    throw new HttpsError("failed-precondition", "User has no stripe account.");
  }

  const stripe = await createStripeClient();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: request.data.priceId,
        quantity: 1,
      },
    ],
    customer: user.data()?.stripeUid,
    metadata: {
      uid: request.auth.uid,
    },
    success_url: "https://d.dedicated-ip.net/d/servers",
    cancel_url: "https://d.dedicated-ip.net/d/servers",
  });

  return session.url;
});

export const onCreateBillingPortal = onCall({
  enforceAppCheck: true,
  consumeAppCheckToken: true,
}, async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "failed-precondition",
      "The function must be " + "called while authenticated."
    );
  }

  const firestore = getFirestore();
  const userDoc = firestore.collection("users").doc(request.auth.uid);
  const user = await userDoc.get();

  if (!user.exists) {
    throw new HttpsError("not-found", "User not found.");
  }

  if (!user.data()?.stripeUid) {
    throw new HttpsError("failed-precondition", "User has no stripe account.");
  }

  const stripe = await createStripeClient();

  const session = await stripe.billingPortal.sessions.create({
    customer: user.data()?.stripeUid,
    return_url: "https://d.dedicated-ip.net/d/servers",
  });

  return session.url;
});

export const onUserRegister = auth.user().onCreate(async (user) => {
  logger.info(`User register with uid ${user.uid} in auth system.`, {
    structuredData: true,
  });
  getFirestore().collection("users").doc(user.uid).create({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  });
  return null;
});

export const onUserAddToUsersCollection = onDocumentCreated(
  "/users/{documentId}",
  async (event) => {
    const data = event.data?.data();

    if (!data) {
      return null;
    }

    const stripe = await createStripeClient();

    const customer = await stripe.customers.create({
      name: data.displayName,
      email: data.email,
      metadata: {
        uid: data.uid,
      },
    });

    return event.data?.ref.set({stripeUid: customer.id}, {merge: true});
  }
);

export const onServerAddedToServersCollection = onDocumentCreated(
  {
    timeoutSeconds: 600,
    document: "/users/{userId}/servers/{documentId}",
  },
  async (event) => {
    const data = event.data?.data();

    if (!data || data.status !== "pending") {
      return null;
    }

    const runId = await runGithubActionUsingAPI("deploy_wireguard_server", {
      inputs: {
        environment: "Production",
        domain_prefix: data.name,
        admin_panel_username: data.username,
        admin_panel_password: data.password,
        server_type: `cpx${data.server}`,
        server_location: data.datacenter,
      },
    });

    if (!runId) {
      return event.data?.ref.set({status: "Failed"}, {merge: true});
    }

    for (let i = 0; i < 8; i++) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      if (await isGithubActionFinishedSuccessfully(runId)) {
        return event.data?.ref.set({status: "Active"}, {merge: true});
      }
    }

    return event.data?.ref.set({status: "Failed"}, {merge: true});
  }
);

/**
 * Creates and returns a Stripe client instance using the API key
 * stored in Firebase Remote Config.
 *
 * @return {Promise<Stripe>} A promise that resolves to a Stripe client
 *     instance.
 */
async function createStripeClient(): Promise<Stripe> {
  const stripeKey = await getRemoteServerConfigValue("Stripe_Key");

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe = require("stripe")(stripeKey);

  return stripe;
}

/**
 * Retrieves the value of a specified key from Firebase Remote Config.
 *
 * @param {string} key - The key for the desired Remote Config value.
 * @return {Promise<string>} A promise resolving to the
 * value of the specified key.
 */
async function getRemoteServerConfigValue(key: string): Promise<string> {
  const template = await admin.remoteConfig().getServerTemplate();
  const parameters = template.toJSON().parameters;

  return (parameters[key].defaultValue as any).value;
}

/**
 * Triggers a GitHub Action workflow using the GitHub API.
 *
 * @param {string} workflowName - The name of the workflow
 * to be triggered.
 * @param {any} body - The JSON payload to be sent
 * with the request.
 * @return {Promise<string>} A promise resolving to the ID of the
 * triggered GitHub Action run.
 */
async function runGithubActionUsingAPI(
  workflowName: "deploy_wireguard_server" | "destroy_wireguard_server",
  body: any
) {
  const response = await fetch(
    `https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/workflows/${workflowName}.yaml/dispatches`,
    {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${
          await getRemoteServerConfigValue("GitHub_Key")
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...{
        ref: "main",
      }, ...body}),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to trigger GitHub action: ${response.statusText}`);
  }

  const data = await response.json();
  return data.id;
}

/**
 * Checks whether a GitHub Action run has finished
 * successfully by querying the GitHub Actions API.
 *
 * @param {number} runId - The ID of the GitHub Action run to check.
 * @return {Promise<boolean>} A promise resolving to true
 * if the action finished successfully, false otherwise.
 */
async function isGithubActionFinishedSuccessfully(
  runId: number
): Promise<boolean> {
  const response = await fetch(
    `https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/runs/${runId}`,
    {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${
          await getRemoteServerConfigValue("GitHub_Key")
        }`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to get GitHub action status: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.status === "completed" && data.conclusion === "success";
}
