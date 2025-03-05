// functions/src/config/firebase.config.ts
import * as admin from "firebase-admin";

admin.initializeApp();

export const db = admin.firestore();
export const remoteConfig = admin.remoteConfig();
