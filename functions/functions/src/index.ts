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
    }, data.name);

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
 * Creates and returns an authenticated Octokit instance using the
 * GitHub API key stored in Firebase Remote Config.
 *
 * @return {Promise<Octokit>} A promise that resolves to an
 * authenticated Octokit instance.
 */
async function createGithubOctokit(): Promise<any> {
  return require("@octokit/rest")({
    auth: await getRemoteServerConfigValue("GitHub_Key"),
  });
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
  const octokit = await createGithubOctokit();

  const response = await octokit.rest.actions.createWorkflowDispatch({
    owner: "AshkanYarmoradi",
    repo: "Dedicated-IP",
    workflow_id: workflowName,
    ref: "main",
    inputs: inputs,
  });

  if (response.status !== 204) {
    throw new Error(`Failed to trigger GitHub action: ${response.status}`);
  }

  let maxRetries = 5;
  let runId = -1;

  do {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const runsResponse = await octokit.rest.actions.listWorkflowRuns({
      owner: "AshkanYarmoradi",
      repo: "Dedicated-IP",
      workflow_id: workflowName,
      branch: "main",
      per_page: 100,
    });
    if (runsResponse.data.workflow_runs.length > 0) {
      const workflowRun = runsResponse.data.workflow_runs.find(
        (run: { name?: string; id: number }) => run.name?.includes(title)
      );
      if (workflowRun) {
        runId = workflowRun.id;
      }
    }
  } while (!runId && maxRetries--);

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
  const octokit = await createGithubOctokit();
  let result = false;
  for (let i = 0; i < 8; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const response = await octokit.rest.actions.getWorkflowRun({
      owner: "AshkanYarmoradi",
      repo: "Dedicated-IP",
      run_id: runId,
    });

    if (response.status !== 200) {
      throw new Error(
        `Failed to get GitHub action status: ${response.status}`
      );
    }

    result = response.data.status === "completed" &&
      response.data.conclusion === "success";

    if (result) {
      break;
    }
  }

  return result;
}
