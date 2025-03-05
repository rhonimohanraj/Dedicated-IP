// functions/src/config/stripe.config.ts
import Stripe from "stripe";
import {getRemoteServerConfigValue} from "./remote.config";

let stripeInstance: Stripe | null = null;

export async function createStripeClient(): Promise<Stripe> {
  if (!stripeInstance) {
    const stripeKey = await getRemoteServerConfigValue("Stripe_Key");
    if (!stripeKey) {
      throw new Error("Stripe key not found in Remote Config.");
    }
    stripeInstance = new Stripe(stripeKey, {
      apiVersion: "2024-11-20.acacia",
    });
  }
  return stripeInstance;
}
