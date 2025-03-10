// functions/src/webhooks/stripe.webhook.ts
import {onRequest} from "firebase-functions/https";
import {getRemoteServerConfigValue} from "../config/remote.config";
import {getEmailLinkToServer, updateServerByGithub} from "../services/server.service";
import {sendServerStatusChangedEmail} from "../services/sendgrid.services";
import {createSubscription} from "../services/stripe.service";

export const onHttpWebhook = onRequest(async (req, res) => {
  const session = await createSubscription(
    "dbca8ba6",
    "EXqY95vjHHflxkJpzVjZ30l05YN2",
    ""
  );

  console.log(session);

  switch (req.body.requestType) {
  case "finalize_action": {
    const secretKey = req.body.secretKey;
    if (secretKey !== await getRemoteServerConfigValue("Github_Secret_key")) {
      res.status(401).send("Unauthorized");
      return;
    }

    await updateServerByGithub(req.body.name, req.body.status);

    const email = await getEmailLinkToServer(req.body.name);

    await sendServerStatusChangedEmail(email, req.body.name, req.body.status);

    res.status(200).send("OK");
    return;
  }
  default:
    res.status(400).send("Invalid request type");
  }
});
