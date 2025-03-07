// functions/src/services/stripe.service.ts
import {createStripeClient} from "../config/stripe.config";
import Stripe from "stripe";
import {HttpsError} from "firebase-functions/v1/https";

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  uid: string,
  serverName?: string,
): Promise<string> {
  const stripe = await createStripeClient();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    customer: customerId,
    metadata: {
      uid,
      priceId,
      serverName: serverName ?? "",
    },
    success_url: "https://d.dedicated-ip.net/d/servers?payment=success",
    cancel_url: "https://d.dedicated-ip.net/d/servers?payment=cancel",
  });

  if (!session || !session.url) {
    throw new HttpsError("internal", "Failed to create checkout session");
  }

  return session.url;
}

export async function createBillingPortalSession(
  customerId: string
): Promise<string> {
  const stripe = await createStripeClient();
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: "https://d.dedicated-ip.net/d/servers",
  });
  if (!session || !session.url) {
    throw new HttpsError("internal", "Failed to create billing portal session");
  }
  return session.url;
}

export async function handleCheckoutCompleted(eventData: Stripe.Checkout.Session) {
  if (eventData.mode !== "subscription" || eventData.payment_status !== "paid") {
    return;
  }
  const uid = eventData.metadata?.uid;
  if (!uid) {
    throw new Error("UID is undefined in event metadata.");
  }
  return {uid: uid, priceId: eventData.metadata?.priceId, serverName: eventData.metadata?.serverName, subscription: eventData.subscription};
}
