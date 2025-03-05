// functions/src/services/cliq.service.ts
import fetch from "node-fetch";
import {getRemoteServerConfigValue} from "../config/remote.config";
import {logger} from "firebase-functions";
import {InternalServerError} from "../utils/errors";

export async function sendCliqMessage(message: string, channel = "Sales") {
  try {
    const webhookUrl = await getRemoteServerConfigValue(`Cliq_${channel}_Bot`);
    if (!webhookUrl) {
      throw new Error(`Cliq webhook URL not found for channel: ${channel}`);
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({text: message}),
    });

    if (!response.ok) {
      throw new Error(`Failed to send Cliq message: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    logger.error("Error sending Cliq message:", error);
    throw new InternalServerError("Failed to send notification"); // Consistent error handling
  }
}
