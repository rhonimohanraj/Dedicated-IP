import {db} from "../config/firebase.config";
import {NotFoundError} from "../utils/errors";

export async function getUser(userId: string): Promise<any> {
  const userDoc = db.collection("users").doc(userId);
  const user = await userDoc.get();

  if (!user.exists) {
    throw new NotFoundError("User not found.");
  }

  const userData = user.data();

  return userData;
}

export async function updateStripeId(userId: string, customerId: string): Promise<void> {
  const userDoc = db.collection("users").doc(userId);
  await userDoc.set({stripeUid: customerId}, {merge: true});
}

export async function updateMollieId(userId: string, customerId: string): Promise<void> {
  const userDoc = db.collection("users").doc(userId);
  await userDoc.set({mollieUid: customerId}, {merge: true});
}

export async function getrivateKeyForServer(userId: string, domainName: string): Promise<string> {
  const userDoc = db.collection("users").doc(userId);
  const serverDoc = userDoc.collection("servers");
  const server = await serverDoc
    .where("name", "==", domainName)
    .where("status", "==", "active")
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

  return apiKey;
}
