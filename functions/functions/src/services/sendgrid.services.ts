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
      templateId: "d-b0261f7e9aa6422e9fde68541aeb783e",
      dynamicTemplateData: {
        name,
        status,
      },
    });
  } catch (error) {
    logger.error("Error sending sendgrid email:", error);
    throw new InternalServerError("Failed to sendgrid email"); // Consistent error handling
  }
}
