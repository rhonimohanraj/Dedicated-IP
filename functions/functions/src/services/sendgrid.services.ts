import {getRemoteServerConfigValue} from "../config/remote.config";
import {logger} from "firebase-functions";
import {InternalServerError} from "../utils/errors";
import sgMail = require("@sendgrid/mail");

export async function sendServerStatusChangedEmail(email: string, name: string, status: string) {
  try {
    const sendGridKey = await getRemoteServerConfigValue("Sendgrid_Key");
    if (!sendGridKey) {
      throw new Error("Sendgrid key not found in Remote Config.");
    }
    sgMail.setApiKey(sendGridKey);
    await sgMail.send({
      to: email,
      from: "system@dedicated-ip.net",
      subject: `Server status changed to '${status}'!`,
      templateId: "f1573599-3c24-46b9-a0c1-8b4834ece8c2",
      dynamicTemplateData: {
        name,
        status,
      },
      trackingSettings: {
        clickTracking: {
          enable: true,
          enableText: true,
        },
        openTracking: {
          enable: true,
          substitutionTag: "open-tracking",
        },
        subscriptionTracking: {
          enable: true,
          text: "%opt_in_ip%",
          html: "%opt_in_ip%",
          substitutionTag: "subscription-tracking",
        },
      },
    });
  } catch (error) {
    logger.error("Error sending sendgrid email:", error);
    throw new InternalServerError("Failed to sendgrid email"); // Consistent error handling
  }
}
