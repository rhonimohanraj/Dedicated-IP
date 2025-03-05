// functions/src/triggers/firestore.triggers.ts
import {
  onDocumentCreated,
  onDocumentUpdated,
} from "firebase-functions/v2/firestore";
import {createStripeClient} from "../config/stripe.config";
import {sendCliqMessage} from "../services/cliq.service";
import {deployServer, deleteServer} from "../services/server.service";
import {InternalServerError, NotFoundError} from "../utils/errors";
import {logger} from "firebase-functions";

export const onUserAddToUsersCollection = onDocumentCreated(
  "/users/{documentId}",
  async (event) => {
    try {
      const data = event.data?.data();

      if (!data) {
        return null;
      }

      const stripe = await createStripeClient();

      const customer = await stripe.customers.create({
        name: data.displayName,
        email: data.email,
        metadata: {
          uid: data.uid,
        },
      });
      if (!event.data) {
        throw new NotFoundError("Event data not found");
      }
      return event.data.ref.set({stripeUid: customer.id}, {merge: true});
    } catch (e: any) {
      logger.error("onUserAddToUsersCollection Trigger ", e);
      throw new InternalServerError("Failed on user add to users collection " + e.message);
    }
  }
);

export const onServerAddedToServersCollection = onDocumentCreated(
  {
    document: "/users/{userId}/servers/{documentId}",
  },
  async (event) => {
    try {
      if (!event.params || !event.data) {
        return;
      }
      await sendCliqMessage("🕺 Someone bought a new server 💃");
      await deployServer(event.params.userId, event.params.documentId);
    } catch (e: any) {
      logger.error("onServerAddedToServersCollection Trigger ", e);
      throw new InternalServerError("Failed on server added " + e.message);
    }
  }
);

export const onServerDeletingInServerCollection = onDocumentUpdated(
  {
    document: "/users/{userId}/servers/{documentId}",
  },
  async (event) => {
    try {
      if (!event.data?.after) {
        return;
      }

      const data = event.data.after.data();
      await sendCliqMessage("😭 Someone deleted a server 💔");
      await deleteServer(data);
    } catch (e:any) {
      logger.error("onServerDeletingInServerCollection Trigger ", e);
      throw new InternalServerError("Failed on server deleting " + e.message);
    }
  }
);
