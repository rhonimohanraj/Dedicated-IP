// functions/src/webhooks/stripe.webhook.ts
import {onRequest} from "firebase-functions/https";
import {getRemoteServerConfigValue} from "../config/remote.config";
import {getEmailLinkToServer, getFCMTokensToServer, updateServerByGithub} from "../services/server.service";
import {sendServerStatusChangedEmail} from "../services/sendgrid.services";
import {messaging} from "firebase-admin";

export const onHttpWebhook = onRequest(async (req, res) => {
  switch (req.body.requestType) {
  case "finalize_action": {
    const secretKey = req.body.secretKey;
    if (secretKey !== await getRemoteServerConfigValue("Github_Secret_key")) {
      res.status(401).send("Unauthorized");
      return;
    }

    await updateServerByGithub(req.body.name, req.body.status);

    try {
      const email = await getEmailLinkToServer(req.body.name);

      await sendServerStatusChangedEmail(email, req.body.name, req.body.status);
    } catch (e) {
      console.error("send Server Status Changed Email Error", e);
    }

    try {
      const tokens = await getFCMTokensToServer(req.body.name);

      if (tokens.length > 0) {
        for (const token of tokens) {
          await messaging().send({
            token: token,
            notification: {
              title: "Server Status Changed",
              body: `Server ${req.body.name} status changed to ${req.body.status}`,
            },
          });
        }
      }
    } catch (e) {
      console.error("send Push Notification Error", e);
    }


    res.status(200).send("OK");
    return;
  }
  default:
    res.status(400).send("Invalid request type");
  }
});
