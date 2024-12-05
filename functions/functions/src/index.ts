import {logger} from "firebase-functions";
import * as admin from "firebase-admin";
import {auth} from "firebase-functions/v1";
import {getFirestore} from "firebase-admin/firestore";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import { onRequest } from "firebase-functions/https";

admin.initializeApp();

export const onHttpRequest = onRequest(async (req, res) => {
  res.send("Hello from Firebase!");
});

export const onUserRegister = auth.user().onCreate(async (user) => {
  logger.info(
    `User register with uid ${user.uid} in auth system.`,
    {structuredData: true}
  );
  await getFirestore().collection("users").add({
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

    const template = await admin.remoteConfig().getServerTemplate();
    const parameters = template.toJSON().parameters;

    const stripeKey = (parameters["Stripe_Key"].defaultValue as any).value;

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const stripe = require("stripe")(stripeKey);

    const customer = await stripe.customers.create({
      name: data.displayName,
      email: data.email,
      metadata: {
        uid: data.uid,
      },
    });

    return event.data?.ref.set({stripe_uid: customer.id}, {merge: true});
  });
