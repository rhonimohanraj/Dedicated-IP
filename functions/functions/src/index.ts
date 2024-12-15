import { logger } from "firebase-functions";
import * as admin from "firebase-admin";
import { auth } from "firebase-functions/v1";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { HttpsError, onCall, onRequest } from "firebase-functions/https";

admin.initializeApp();

export const onHttpRequest = onRequest(async (req, res) => {
  switch (req.body.requestType) {
    default: {
      res.status(400).send("Invalid request type");
    }
  }
});

export const onCreatePaymentLink = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError(
      "failed-precondition",
      "The function must be " + "called while authenticated."
    );
  }

  const user = await getFirestore().collection("users").doc(request.auth.uid).get();

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

    return event.data?.ref.set({ stripeUid: customer.id }, { merge: true });
  }
);

async function createStripeClient() {

  const template = await admin.remoteConfig().getServerTemplate();
  const parameters = template.toJSON().parameters;

  const stripeKey = (parameters["Stripe_Key"].defaultValue as any).value;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const stripe = require("stripe")(stripeKey);

  return stripe;
}