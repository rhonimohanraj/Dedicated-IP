// functions/src/triggers/firestore.triggers.ts
import {
  onDocumentCreated,
  onDocumentUpdated,
} from "firebase-functions/v2/firestore";
import {deployServer, deleteServer} from "../services/server.service";
import {InternalServerError} from "../utils/errors";
import {logger} from "firebase-functions";
import {createCustomer} from "../services/stripe.service";

export const onUserAddToUsersCollection = onDocumentCreated(
  "/users/{documentId}",
  async (event) => {
    try {
      const data = event.data?.data();

      if (!data) {
        return null;
      }

      const customerId = await createCustomer(data.displayName, data.email, data.uid);

      if (!event.data) {
        return null;
      }

      return event.data.ref.set({stripeUid: customerId}, {merge: true});
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
      await deleteServer(data);
    } catch (e:any) {
      logger.error("onServerDeletingInServerCollection Trigger ", e);
      throw new InternalServerError("Failed on server deleting " + e.message);
    }
  }
);
