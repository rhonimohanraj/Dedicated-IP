
import {InternalServerError} from "../utils/errors";
import {logger} from "firebase-functions";
import {onSchedule} from "firebase-functions/v2/scheduler";
import {updateProductsStripe} from "../services/stripe.service";

export const onUpdateProductsStripe = onSchedule(
  "every day 00:00",
  async () => {
    try {
      await updateProductsStripe();
      // Your code here
    } catch (e: any) {
      logger.error("onUpdateProductsStripe Trigger ", e);
      throw new InternalServerError("Failed on update stripe products " + e.message);
    }
  }
);
