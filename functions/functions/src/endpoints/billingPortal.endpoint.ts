// functions/src/endpoints/billingPortal.endpoint.ts
import {onCall} from "firebase-functions/https";
import {db} from "../config/firebase.config";
import {createBillingPortalSession} from "../services/stripe.service";
import {FailedPreconditionError, NotFoundError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";
import {createStripeClient} from "../config/stripe.config";

export const onCreateBillingPortal = onCall({
  enforceAppCheck: true,
  consumeAppCheckToken: true,
}, async (request) => {
  try {
    if (!request.auth) {
      throw new UnauthenticatedError(
        "The function must be called while authenticated."
      );
    }

    const userDoc = db.collection("users").doc(request.auth.uid);
    const user = await userDoc.get();

    if (!user.exists) {
      throw new NotFoundError("User not found.");
    }

    const userData = user.data();

    if (!userData?.stripeUid) {
      const stripe = await createStripeClient();
      const customer = await stripe.customers.create({
        name: userData.displayName,
        email: userData.email,
        metadata: {
          uid: userData.uid,
        },
      });
      await userDoc.set({stripeUid: customer.id}, {merge: true});
    }
    return await createBillingPortalSession(userData.stripeUid);
  } catch (e: any) {
    if (e instanceof HttpsError) {
      throw e;
    }
    throw new FailedPreconditionError(e.message);
  }
});
