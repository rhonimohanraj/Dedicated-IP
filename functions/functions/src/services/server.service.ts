// functions/src/services/server.service.ts
import {db} from "../config/firebase.config";
import {ProductDto} from "../dto/product.dto";
import {getRemoteConfigValue} from "../config/remote.config";
import {generateName, getRandomInt} from "../utils/helpers";
import {
  ServerCreateDto,
  ServerPrivateDto,
  ServerUpdateDto,
} from "../dto/server.dto";
import * as crypto from "crypto";
import {FieldValue} from "firebase-admin/firestore";
import {runGithubAction} from "./github.service";
import {sendCliqMessage} from "./cliq.service";
import {firestore} from "firebase-admin";
import QuerySnapshot = firestore.QuerySnapshot;
import DocumentData = firestore.DocumentData;

export async function createServer(
  uid: string,
  priceId: string,
  subscription: string,
  serverName?: string
): Promise<string> {
  const products = JSON.parse(
    await getRemoteConfigValue("Products")
  ) as ProductDto;

  const filteredProducts = products.products.filter(
    (product) => product.stripePriceId === priceId
  );

  if (filteredProducts.length === 0) {
    throw new Error("Product not found.");
  }

  const product = filteredProducts[0];

  let finalServerName = serverName;

  if (!finalServerName) {
    finalServerName = generateName() + "-" + getRandomInt(1, 1000);
  } else {
    finalServerName = finalServerName
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  const firestore = db;

  const querySnapshot = await firestore
    .collectionGroup("servers")
    .where("name", "==", finalServerName)
    .where("status", "==", "active")
    .limit(10)
    .get();

  if (querySnapshot.size > 1) {
    finalServerName = finalServerName + "-" + getRandomInt(1, 1000);
  }

  const userDoc = firestore.collection("users").doc(uid);
  const serverCollection = userDoc.collection("servers");

  const serverData: ServerCreateDto = {
    countryCode: product.location.countryCode,
    location: `${product.location.city}, ${product.location.country}`,
    server: product.server,
    datacenter: product.location.datacenter,
    datacenterProvider: product.location.datacenterProvider,
    name: finalServerName,
    username: crypto.randomUUID(),
    password: crypto.randomUUID(),
    status: "pending",
    createdAt: FieldValue.serverTimestamp() as any,
    subscription: subscription,
  };

  const serverDoc = await serverCollection.add(serverData);
  const connectionCollection = serverDoc.collection("private");
  const connectionData: ServerPrivateDto = {
    api_key: crypto.randomUUID(),
  };
  await connectionCollection.doc("connection").create(connectionData);
  return serverDoc.id;
}

export async function updateServerStatusBySubscription(
  subscriptionId: string,
  status: string
) {
  const querySnapshot = await db
    .collectionGroup("servers")
    .where("subscription", "==", subscriptionId)
    .get();

  if (querySnapshot.empty) {
    throw new Error("Server not found for subscription: " + subscriptionId);
  }

  const batch = db.batch(); // Use batch for atomic updates
  querySnapshot.forEach((doc: any) => {
    const updateData: ServerUpdateDto = {status};
    batch.set(doc.ref, updateData, {merge: true});
  });
  await batch.commit();
}

export async function updateServerByGithub(name: string, status: string) {
  const querySnapshot = await db
    .collectionGroup("servers")
    .where("name", "==", name.trim())
    .where("status", "!=", "deleted")
    .limit(10)
    .get();

  if (querySnapshot.empty) {
    throw new Error("Server not found.");
  }

  if (querySnapshot.size > 1) {
    throw new Error("Multiple servers found.");
  }

  const updatePromises = querySnapshot.docs.map((doc: any) => {
    const updateData: ServerUpdateDto = {status};
    return doc.ref.set(updateData, {merge: true});
  });
  await Promise.all(updatePromises);
}

export async function deployServer(userId: string, documentId: string) {
  const data = (
    await db
      .collection("users")
      .doc(userId)
      .collection("servers")
      .doc(documentId)
      .get()
  ).data();

  if (!data || data.status !== "pending") {
    return;
  }

  const connection = await db
    .collection("users")
    .doc(userId)
    .collection("servers")
    .doc(documentId)
    .collection("private")
    .doc("connection")
    .get();

  const runId = await runGithubAction(
    "deploy_wireguard_server",
    {
      environment: "Production",
      domain_prefix: data.name,
      admin_panel_username: data.username,
      admin_panel_password: data.password,
      server_type: data.server,
      server_location: data.datacenter,
      datacenter_provider: data.datacenterProvider,
      api_key: connection.data()?.api_key,
    },
    data.name
  );
  if (!runId) {
    await db
      .collection("users")
      .doc(userId)
      .collection("servers")
      .doc(documentId)
      .set({status: "failed"}, {merge: true});
  }

  await db
    .collection("users")
    .doc(userId)
    .collection("servers")
    .doc(documentId)
    .set({status: "creating"}, {merge: true});

  try {
    await sendCliqMessage("🕺 Someone bought a new server 💃");
  } catch (e: any) {
    console.log(e);
  }
}

export async function deleteServer(data: FirebaseFirestore.DocumentData) {
  if (!data || data.status !== "deleting") {
    return;
  }

  await runGithubAction(
    "destroy_wireguard_server",
    {
      environment: "Production",
      domain_prefix: data.name,
      datacenter_provider: data.datacenterProvider,
    },
    data.name
  );

  await db.doc(data.ref.path).set({status: "deleted"}, {merge: true});

  try {
    await sendCliqMessage("😭 Someone deleted a server 💔");
  } catch (e) {
    console.log(e);
  }
}

export async function getEmailLinkToServer(name: string): Promise<string> {
  const querySnapshot = await db
    .collectionGroup("servers")
    .where("name", "==", name)
    .limit(10)
    .get();

  if (querySnapshot.empty) {
    throw new Error("Server not found.");
  }

  if (querySnapshot.size > 1) {
    throw new Error("Multiple servers found.");
  }

  const parent = querySnapshot.docs[0].ref.parent.parent;

  if (!parent) {
    throw new Error("Parent not found.");
  }

  const user = await parent.get();

  if (!user.exists) {
    throw new Error("User not found.");
  }

  return user.data()?.email;
}

export async function getFCMTokensToServer(name: string): Promise<string[]> {
  const querySnapshot = await db
    .collectionGroup("servers")
    .where("name", "==", name)
    .limit(10)
    .get();

  if (querySnapshot.empty) {
    throw new Error("Server not found.");
  }

  if (querySnapshot.size > 1) {
    throw new Error("Multiple servers found.");
  }

  const parent = querySnapshot.docs[0].ref.parent.parent;

  if (!parent) {
    throw new Error("Parent not found.");
  }

  const user = await parent.get();

  if (!user.exists) {
    throw new Error("Server not found.");
  }

  const uid = user.data()?.uid as string;

  if (!uid) {
    throw new Error("UID not found.");
  }

  const querySnapshotFCMTokens: QuerySnapshot<DocumentData, DocumentData> = await db
    .collection("users")
    .doc(uid)
    .collection("fcmTokens")
    .get();

  if (querySnapshotFCMTokens.empty) {
    return [];
  }

  return querySnapshotFCMTokens.docs.map((data: any) => data.data().token);
}
