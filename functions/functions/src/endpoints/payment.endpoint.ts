// functions/src/endpoints/payment.endpoint.ts
import {onCall} from "firebase-functions/https";
import {createCheckoutSession} from "../services/stripe.service";
import {db} from "../config/firebase.config";
import {FailedPreconditionError, NotFoundError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";

export const onCreatePaymentLink = onCall({
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
      throw new FailedPreconditionError("User has no Stripe account.");
    }
    return await createCheckoutSession(userData.stripeUid, request.data.priceId, request.auth.uid, request.data.serverName);
  } catch (e: any) {
    if (e instanceof HttpsError) {
      throw e;
    }
    throw new FailedPreconditionError(e.message);
  }
});
