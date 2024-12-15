import {logger} from "firebase-functions";
import * as admin from "firebase-admin";
import {auth} from "firebase-functions/v1";
import {getFirestore} from "firebase-admin/firestore";
import {onDocumentCreated} from "firebase-functions/v2/firestore";
import { HttpsError, onCall, onRequest } from "firebase-functions/https";

admin.initializeApp();

export const onHttpRequest = onCall(
  async (req) => {
    if (!req.auth) {
      throw new HttpsError("failed-precondition", "The function must be " +
              "called while authenticated.");
    }
    switch (req.data.requestType) {
      case "paymentLink": {
        return "Payment link created";
      }
      default: {
       return "Invalid request type";
    }
  }
});

export const onUserRegister = auth.user().onCreate(async (user) => {
  logger.info(
    `User register with uid ${user.uid} in auth system.`,
    {structuredData: true}
  );
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

    return event.data?.ref.set({stripeUid: customer.id}, {merge: true});
  });
