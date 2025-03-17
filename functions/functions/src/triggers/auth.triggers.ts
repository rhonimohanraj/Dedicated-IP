// functions/src/triggers/auth.triggers.ts
import {auth} from "firebase-functions/v1";
import {logger} from "firebase-functions";
import {db} from "../config/firebase.config";
import {sendCliqMessage} from "../services/cliq.service";
import {InternalServerError} from "../utils/errors";

export const onUserRegister = auth.user().onCreate(async (user) => {
  logger.info(`User register with uid ${user.uid} in auth system.`, {
    structuredData: true,
  });
  try {
    await db.collection("users").doc(user.uid).create({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  } catch (e: any) {
    logger.error("onUserRegister Trigger ", e);
    throw new InternalServerError("Failed on user register " + e.message);
  }

  try {
    await sendCliqMessage("🎉 We have new customer: " + user.email + "🎉");
  } catch (e) {
    console.log(e);
  }

  return null;
});
