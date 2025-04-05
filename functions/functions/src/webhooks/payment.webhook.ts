// functions/src/webhooks/stripe.webhook.ts
import {onRequest} from "firebase-functions/https";
import {createServer, updateServerStatusBySubscription} from "../services/server.service";
import {EnumPaymentDecision, validatePaymentAndCreateSubscription} from "../services/mollie.service";

export const onPaymentWebhook = onRequest(async (req, res) => {
  try {
    const requestId = req.body.id;

    const result = await validatePaymentAndCreateSubscription(
      requestId);

    switch (result.decision) {
    case EnumPaymentDecision.CreateServer: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await createServer(result.userId!, result.productId!, result.subscriptionId!, result.serverName!);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await updateServerStatusBySubscription(result.subscriptionId!, "active");
      break;
    }
    case EnumPaymentDecision.DeleteServer: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await updateServerStatusBySubscription(result.subscriptionId!, "deleting");
      break;
    }
    case EnumPaymentDecision.NothingImportant: {
      break;
    }
    }

    res.status(200).send("OK");
  } catch (error: any) {
    console.error("Error in onStripeWebhook:", error);
    res.status(500).send(error.message || "Internal Server Error"); // Send error message to client
  }
});
