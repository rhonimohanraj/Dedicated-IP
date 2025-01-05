import {logger} from "firebase-functions";
import * as admin from "firebase-admin";
import {auth} from "firebase-functions/v1";
import {getFirestore} from "firebase-admin/firestore";
import {
  onDocumentCreated,
  onDocumentUpdated,
} from "firebase-functions/v2/firestore";
import {
  HttpsError,
  onCall,
  onRequest,
} from "firebase-functions/https";
import Stripe from "stripe";
import {generateName, getRandomInt} from "./helper";
import {ProductDto} from "./DTO/product.dto";

admin.initializeApp();

export const onHttpRequest = onRequest(async (req, res) => {
  switch (req.body.requestType) {
  case "finalize_action": {
    const secretKey = req.body.secretKey;
    if (secretKey !== await getRemoteServerConfigValue("Github_Secret_key")) {
      res.status(401).send("Unauthorized");
      return;
    }
    const name = (req.body.name as string).replace(
      "Deploy WireGuard Server - ",
      ""
    );
    const status = req.body.status;
    const firestore = getFirestore();
    const querySnapshot = await firestore.collectionGroup("servers")
      .where("name", "==", name.trim())
      .get();

    if (querySnapshot.empty) {
      throw new Error("Server not found.");
    }
    querySnapshot.forEach(async (doc) => {
      await doc.ref.set({status: status}, {merge: true});
    });
    break;
  }
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
      const uid = eventData.metadata?.uid;
      if (!uid) {
        throw new Error("UID is undefined in event metadata.");
      }
      const products = JSON.parse(
        await getRemoteConfigValue("Products")
      ) as ProductDto;

      const filteredProducts = products.products.filter(
        (product) =>
          product.stripePriceId === eventData.metadata?.priceId
      );

      if (filteredProducts.length === 0) {
        throw new Error("Product not found.");
      }

      const product = filteredProducts[0];

      const firestore = getFirestore();
      const userDoc = firestore.collection("users").doc(uid);
      const serverCollection = userDoc.collection("servers");
      await serverCollection.add({
        countryCode: product.location.countryCode,
        location: `${product.location.city}, ${product.location.country}`,
        server: product.server,
        datacenter: product.location.datacenter,
        datacenterProvider: product.location.datacenterProvider,
        name: generateName() + "-" + getRandomInt(1, 1000),
        username: "admin",
        password:
          `${getRandomInt(1, 1000)}` +
          "-not-secure-" +
          `${getRandomInt(1, 1000)}`,
        status: "pending",
        createdAt: admin.firestore.Timestamp.now(),
        subscription: eventData.subscription,
      });
    }
    break;
  }
  case "customer.subscription.deleted": {
    const eventData = event.data.object;
    const firestore = getFirestore();
    const querySnapshot = await firestore.collectionGroup("servers")
      .where("subscription", "==", eventData.id)
      .get();

    if (querySnapshot.empty) {
      throw new Error("Server not found.");
    }
    querySnapshot.forEach(async (doc) => {
      await doc.ref.set({status: "deleting"}, {merge: true});
    });
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
      priceId: request.data.priceId,
    },
    success_url:
      "https://d.dedicated-ip.net/d/servers?payment=success",
    cancel_url:
      "https://d.dedicated-ip.net/d/servers?payment=cancel",
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
    timeoutSeconds: 539,
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
        server_type: data.server,
        server_location: data.datacenter,
        datacenter_provider: data.datacenterProvider,
      },
    }, data.name);

    if (!runId) {
      return event.data?.ref.set({status: "failed"}, {merge: true});
    }

    for (let i = 0; i < 8; i++) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      if (await isGithubActionFinishedSuccessfully(runId)) {
        return event.data?.ref.set({status: "active"}, {merge: true});
      }
    }

    return event.data?.ref.set({status: "failed"}, {merge: true});
  }
);

export const onServerDeletingInServerCollection = onDocumentUpdated(
  {
    timeoutSeconds: 539,
    document: "/users/{userId}/servers/{documentId}",
  },
  async (event) => {
    const data = event.data?.after.data();

    if (!data || data.status !== "deleting") {
      return null;
    }

    await runGithubActionUsingAPI("destroy_wireguard_server", {
      inputs: {
        environment: "Production",
        domain_prefix: data.name,
        datacenter_provider: data.datacenterProvider,
      },
    }, data.name);

    return event.data?.after.ref.set({status: "deleted"}, {merge: true});
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
 * Retrieves the value of a specified key from Firebase Remote Config.
 *
 * @param {string} key - The key for the desired Remote Config value.
 * @return {Promise<string>} A promise resolving to the
 * value of the specified key.
 */
async function getRemoteConfigValue(key: string): Promise<string> {
  const template = await admin.remoteConfig().getTemplate();
  const parameters = template.parameters;

  return (parameters[key].defaultValue as any).value;
}

/**
 * Triggers a GitHub Action workflow using the GitHub API.
 *
 * @param {string} workflowName - The name of the workflow
 * to be triggered.
 * @param {any} inputs - The JSON payload to be sent
 * with the request.
 * @param {any} title - The title of the GitHub Action run.
 * @return {Promise<string>} A promise resolving to the ID of the
 * triggered GitHub Action run.
 */
async function runGithubActionUsingAPI(
  workflowName: "deploy_wireguard_server" | "destroy_wireguard_server",
  inputs: any,
  title: string
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
      }, ...inputs}),
    }
  );


  if (!response.ok) {
    throw new Error(`Failed to trigger GitHub action: ${response.status}`);
  }

  let maxRetries = 5;
  let runId = -1;

  do {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(`https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/workflows/${workflowName}.yaml/runs?branch=main&per_page=100`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${
          await getRemoteServerConfigValue("GitHub_Key")
        }`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to retrieve workflow runs: ${response.status}`);
    }

    const runsData = await response.json();
    const workflowRun = runsData.workflow_runs.find(
      (run: { name?: string; id: number }) => run.name?.includes(title)
    );

    if (workflowRun) {
      runId = workflowRun.id;
    }
  } while (runId === -1 && maxRetries--);

  if (runId < 0) {
    throw new Error(`Failed to find GitHub action: ${title}`);
  }

  return runId;
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
  let result = false;
  let maxRetries = 8;

  do {
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const response = await fetch(`https://api.github.com/repos/AshkanYarmoradi/Dedicated-IP/actions/runs/${runId}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${
          await getRemoteServerConfigValue("GitHub_Key")
        }`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get workflow run status: ${response.status}`);
    }

    const runData = await response.json();
    result = runData.status === "completed" && runData.conclusion === "success";
  } while (!result && maxRetries--);

  return result;
}
