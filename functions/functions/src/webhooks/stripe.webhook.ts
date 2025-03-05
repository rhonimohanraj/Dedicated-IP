// functions/src/webhooks/stripe.webhook.ts
import {onRequest} from "firebase-functions/https";
import Stripe from "stripe";
import {handleCheckoutCompleted} from "../services/stripe.service";
import {createServer, updateServerStatusBySubscription} from "../services/server.service";

export const onStripeWebhook = onRequest(async (req, res) => {
  try {
    const event: Stripe.Event = req.body;

    switch (event.type) {
    case "checkout.session.completed": {
      const eventData = event.data.object as Stripe.Checkout.Session;
      const checkoutCompletedResult = await handleCheckoutCompleted(eventData);
      if (!handleCheckoutCompleted) {
        break;
      }

      type CheckoutCompletedResult = {
          uid: string;
          serverName: string;
          priceId?: string;
          subscription: string;
      };

      const {uid, serverName, priceId, subscription} = checkoutCompletedResult as CheckoutCompletedResult;
      if (!uid || !subscription) {
        break;
      }
      await createServer(uid, priceId!, serverName);
      await updateServerStatusBySubscription(subscription.toString(), "pending");
      break;
    }
    case "customer.subscription.deleted": {
      const eventData = event.data.object as Stripe.Subscription;
      await updateServerStatusBySubscription(eventData.id, "deleting");
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send("OK");
  } catch (error: any) {
    console.error("Error in onStripeWebhook:", error);
    res.status(500).send(error.message || "Internal Server Error"); // Send error message to client
  }
});
