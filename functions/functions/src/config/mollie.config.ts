// functions/src/config/mollie.config.ts
import {getRemoteServerConfigValue} from "./remote.config";
import {MollieClient, createMollieClient as _createMollieClient} from "@mollie/api-client";

let mollieInstance: MollieClient | null = null;

export async function createMollieClient(): Promise<MollieClient> {
  if (!mollieInstance) {
    const mollieKey = await getRemoteServerConfigValue("Mollie_Key");
    if (!mollieKey) {
      throw new Error("Mollie key not found in Remote Config.");
    }
    mollieInstance = _createMollieClient({apiKey: mollieKey});
  }
  return mollieInstance;
}
