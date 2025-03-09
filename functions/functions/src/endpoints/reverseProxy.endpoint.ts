// functions/src/endpoints/reverseProxy.endpoint.ts
import {onCall} from "firebase-functions/https";
import fetch from "node-fetch";
import {FailedPreconditionError, NotFoundError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";
import {getrivateKeyForServer} from "../services/user.service";

export const onReverseProxy = onCall({
  enforceAppCheck: true,
  consumeAppCheckToken: true,
}, async (request) => {
  try {
    if (!request.auth) {
      throw new UnauthenticatedError(
        "The function must be called while authenticated."
      );
    }
    const apiKey = await getrivateKeyForServer(request.auth.uid, request.data.domainName);

    if (!apiKey) {
      throw new NotFoundError("API Key not found.");
    }

    const functionName = request.data.functionName;
    const body = request.data.body;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
      body: body ? JSON.stringify(body) : undefined,
    };


    const response = await fetch(
      decodeURI(
        "https://" +
        request.data.domainName +
        ".dedicated-ip.cloud:8443" +
        "/external/api/" +
        functionName
      ),
      options
    );

    if (!response.ok) {
      const errorText = await response.text();
      // Get error details from the server if possible

      throw new FailedPreconditionError(
        `API request failed with status ${response.status}: ` +
        `${errorText || response.statusText}`
      );
    }

    const apiData = await response.text();

    return apiData;
  } catch (e: any) {
    if (e instanceof HttpsError) {
      throw e;
    }
    throw new FailedPreconditionError(e.message);
  }
});
