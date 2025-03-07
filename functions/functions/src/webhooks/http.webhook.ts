// functions/src/webhooks/stripe.webhook.ts
import {onRequest} from "firebase-functions/https";
import {getFirestore} from "firebase-admin/firestore";
import {getRemoteServerConfigValue} from "../config/remote.config";
import {db} from "../config/firebase.config";
import {ServerUpdateDto} from "../dto/server.dto";

export const onHttpWebhook = onRequest(async (req, res) => {
  switch (req.body.requestType) {
  case "finalize_action": {
    const secretKey = req.body.secretKey;
    if (secretKey !== await getRemoteServerConfigValue("Github_Secret_key")) {
      res.status(401).send("Unauthorized");
      return;
    }
    const name = req.body.name;
    const firestore = getFirestore();
    const querySnapshot = await firestore.collectionGroup("servers")
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

    const status = req.body.status;

    const batch = db.batch(); // Use batch for atomic updates
    querySnapshot.forEach((doc) => {
      const updateData: ServerUpdateDto = {status};
      batch.set(doc.ref, updateData, {merge: true});
    });
    await batch.commit();

    res.status(200).send("OK");
    return;
  }
  default:
    res.status(400).send("Invalid request type");
  }
});
