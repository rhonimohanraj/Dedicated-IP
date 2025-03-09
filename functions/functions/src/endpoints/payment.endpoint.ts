// functions/src/endpoints/payment.endpoint.ts
import {onCall} from "firebase-functions/https";
import {createCheckoutSession, createCheckoutSessionClientSecret} from "../services/stripe.service";
import {db} from "../config/firebase.config";
import {FailedPreconditionError, NotFoundError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";
import {getRemoteConfigValue} from "../config/remote.config";
import {ProductDto} from "../dto/product.dto";
import {createStripeClient} from "../config/stripe.config";

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

    const products = JSON.parse(
      await getRemoteConfigValue("Products")
    ) as ProductDto;

    const filteredProducts = products.products.filter(
      (product) =>
        product.id === request.data.productId
    );

    if (filteredProducts.length === 0) {
      throw new Error("Product not found.");
    }

    const product = filteredProducts[0];

    let stripeUid = userData.stripeUid as string;

    if (!stripeUid) {
      const stripe = await createStripeClient();
      const customer = await stripe.customers.create({
        name: userData.displayName,
        email: userData.email,
        metadata: {
          uid: userData.uid,
        },
      });
      await userDoc.set({stripeUid: customer.id}, {merge: true});
      stripeUid = customer.id;
    }

    return await createCheckoutSession(stripeUid, product.stripePriceId, request.auth.uid, request.data.serverName);
  } catch (e: any) {
    if (e instanceof HttpsError) {
      throw e;
    }
    throw new FailedPreconditionError(e.message);
  }
});

export const onCreatePaymentLinkApp = onCall({
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

    const products = JSON.parse(
      await getRemoteConfigValue("Products")
    ) as ProductDto;

    const filteredProducts = products.products.filter(
      (product) =>
        product.id === request.data.productId
    );

    if (filteredProducts.length === 0) {
      throw new Error("Product not found.");
    }

    const product = filteredProducts[0];

    let stripeUid = userData.stripeUid as string;

    if (!stripeUid) {
      const stripe = await createStripeClient();
      const customer = await stripe.customers.create({
        name: userData.displayName,
        email: userData.email,
        metadata: {
          uid: userData.uid,
        },
      });
      await userDoc.set({stripeUid: customer.id}, {merge: true});
      stripeUid = customer.id;
    }

    return await createCheckoutSessionClientSecret(stripeUid, product.stripePriceId, request.auth.uid, request.data.serverName);
  } catch (e: any) {
    if (e instanceof HttpsError) {
      throw e;
    }
    throw new FailedPreconditionError(e.message);
  }
});
