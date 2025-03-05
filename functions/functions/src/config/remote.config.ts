// functions/src/config/remoteConfig.ts
import {remoteConfig} from "./firebase.config";

export async function getRemoteConfigValue(key: string): Promise<string> {
  const template = await remoteConfig.getTemplate();
  const parameters = template.parameters;
  const defaultValue = parameters[key]?.defaultValue;

  if (!defaultValue || typeof defaultValue !== "object" || !("value" in defaultValue)) {
    throw new Error(`Remote config value for key "${key}" is missing or invalid.`);
  }
  return defaultValue.value as string;
}

export async function getRemoteServerConfigValue(key: string): Promise<string> {
  const template = await remoteConfig.getServerTemplate();
  const parameters = template.toJSON().parameters;
  const defaultValue = parameters[key]?.defaultValue;

  if (!defaultValue || typeof defaultValue !== "object" || !("value" in defaultValue)) {
    throw new Error(`Remote config value for key "${key}" is missing or invalid.`);
  }
  return defaultValue.value as string;
}
