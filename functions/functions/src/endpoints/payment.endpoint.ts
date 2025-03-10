// functions/src/endpoints/payment.endpoint.ts
import {onCall} from "firebase-functions/https";
import {
  createBillingPortalSession,
  createCheckoutSession,
  createCheckoutSessionApp,
} from "../services/stripe.service";
import {FailedPreconditionError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";
import {generateName, getRandomInt} from "../utils/helpers";

export const onCreatePaymentLink = onCall(
  {
    enforceAppCheck: true,
    consumeAppCheckToken: true,
  },
  async (request) => {
    try {
      if (!request.auth) {
        throw new UnauthenticatedError(
          "The function must be called while authenticated."
        );
      }

      let serverName = request.data.serverName;

      if (!serverName) {
        serverName = generateName() + "-" + getRandomInt(1, 1000);
      }

      serverName = serverName
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      const session = await createCheckoutSession(
        request.data.productId,
        request.auth.uid,
        serverName
      );

      return {url: session.url};
    } catch (e: any) {
      if (e instanceof HttpsError) {
        throw e;
      }
      throw new FailedPreconditionError(e.message);
    }
  }
);

export const onCreatePaymentLinkApp = onCall(
  {
    enforceAppCheck: true,
    consumeAppCheckToken: true,
  },
  async (request) => {
    try {
      if (!request.auth) {
        throw new UnauthenticatedError(
          "The function must be called while authenticated."
        );
      }

      let serverName = request.data.serverName;

      if (!serverName) {
        serverName = generateName() + "-" + getRandomInt(1, 1000);
      }

      serverName = serverName
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

      const session = await createCheckoutSessionApp(
        request.data.productId,
        request.auth.uid,
        serverName
      );

      return {clientSecret: session.client_secret};
    } catch (e: any) {
      if (e instanceof HttpsError) {
        throw e;
      }
      throw new FailedPreconditionError(e.message);
    }
  }
);

export const onCreateBillingPortal = onCall(
  {
    enforceAppCheck: true,
    consumeAppCheckToken: true,
  },
  async (request) => {
    try {
      if (!request.auth) {
        throw new UnauthenticatedError(
          "The function must be called while authenticated."
        );
      }

      const session = await createBillingPortalSession(request.auth.uid);

      return {url: session.url};
    } catch (e: any) {
      if (e instanceof HttpsError) {
        throw e;
      }
      throw new FailedPreconditionError(e.message);
    }
  }
);
