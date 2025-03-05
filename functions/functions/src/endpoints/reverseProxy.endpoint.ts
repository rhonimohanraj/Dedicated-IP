// functions/src/endpoints/reverseProxy.endpoint.ts
import {onCall} from "firebase-functions/https";
import {db} from "../config/firebase.config";
import fetch from "node-fetch";
import {FailedPreconditionError, NotFoundError, UnauthenticatedError} from "../utils/errors";
import {HttpsError} from "firebase-functions/v1/https";

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

    const firestore = db;
    const userCollection = firestore.collection("users");
    const userDoc = userCollection.doc(request.auth.uid);
    const serverDoc = userDoc.collection("servers");
    const server = await serverDoc
      .where("name", "==", request.data.domainName)
      .get();

    if (server.empty) {
      throw new NotFoundError("Server not found.");
    }

    const pv8 = await serverDoc
      .doc(server.docs[0].id)
      .collection("private")
      .doc("connection")
      .get();

    if (!pv8.exists) {
      throw new NotFoundError("Private data not found.");
    }

    const apiKey = pv8.data()?.api_key;

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
