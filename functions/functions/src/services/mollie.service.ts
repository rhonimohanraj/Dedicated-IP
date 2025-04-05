// functions/src/services/stripe.service.ts
import {HttpsError} from "firebase-functions/v1/https";
import {getProduct} from "./product.service";
import {getUser, updateMollieId} from "./user.service";
import {createMollieClient} from "../config/mollie.config";
import {Payment, PaymentStatus, SequenceType} from "@mollie/api-client";
import {db} from "../config/firebase.config";
import {ServerCreateDto} from "../dto/server.dto";

export async function createFirstPaymentSession(
  productId: string,
  userId: string,
  serverName?: string,
): Promise<Payment> {
  const userData = await getUser(userId);

  const product = await getProduct(productId);

  let customerId = userData.stripeUid as string;

  if (!customerId) {
    customerId = await createCustomer(userData.displayName, userData.email, userId);
    await updateMollieId(userId, customerId);
  }

  const mollie = await createMollieClient();
  const session = await mollie.payments.create({
    customerId: customerId,
    metadata: {
      userId: userId,
      productId: product.id,
      serverName: serverName ?? "",
    },
    redirectUrl: "https://d.dedicated-ip.net/d/servers?payment=success",
    cancelUrl: "https://d.dedicated-ip.net/d/servers?payment=cancel",
    webhookUrl: "https://pf.dedicated-ip.net/",
    description: product.description,
    amount: {
      value: "0.01",
      currency: "EUR",
    },
    sequenceType: SequenceType.first,
  });

  if (!session) {
    throw new HttpsError("internal", "Failed to create checkout session");
  }

  return session;
}

export async function validatePaymentAndCreateSubscription(
  paymentId: string,
): Promise<{
  decision: EnumPaymentDecision,
  serverName?: string,
  productId?: string,
  userId?: string,
  subscriptionId?: string,
}> {
  const mollie = await createMollieClient();

  const payment = await mollie.payments.get(paymentId);

  if (!payment) {
    throw new HttpsError("internal", "Payment not found");
  }

  const {userId, productId, serverName} = payment.metadata as {
    userId: string,
    productId: string,
    serverName?: string
  };

  const userData = await getUser(userId);

  const product = await getProduct(productId);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const customerId = payment.customerId!;

  if (userData.mollieUid != payment.id) {
    throw new HttpsError("internal", "Customer not found");
  }

  if (!customerId) {
    throw new HttpsError("internal", "Customer not found");
  }

  if (payment.status === PaymentStatus.paid && payment.subscriptionId === null) {
    const querySnapshot = await db.collectionGroup("servers")
      .where("name", "==", serverName)
      .get();

    if (!querySnapshot.empty) {
      const parent = querySnapshot.docs[0].ref.parent.parent;

      if (!parent) {
        throw new Error("Parent not found.");
      }

      const user = await parent.get();

      if (user.id === userId) {
        throw new HttpsError("internal", "Server found with this name");
      }
    }

    const subscription = await mollie.customerSubscriptions.create({
      customerId: customerId,
      mandateId: payment.mandateId,
      metadata: {
        uid: userId,
        priceId: product.id,
        serverName: serverName ?? "",
      },
      amount: {
        value: product.price.toFixed(),
        currency: "EUR",
      },
      webhookUrl: "https://pf.dedicated-ip.net/",
      description: product.description,
      interval: `${product.duration}`,
    });

    if (!subscription) {
      throw new HttpsError("internal", "Failed to create subscription");
    }

    return {
      decision: EnumPaymentDecision.CreateServer,
      serverName: serverName,
      productId: productId,
      userId: userId,
      subscriptionId: subscription.id,
    };
  } else if (
    (payment.status === PaymentStatus.failed ||
      payment.status === PaymentStatus.canceled ||
      payment.status === PaymentStatus.expired) &&
    payment.subscriptionId !== null) {
    return {
      decision: EnumPaymentDecision.DeleteServer,
      serverName: serverName,
      productId: productId,
      userId: userId,
      subscriptionId: payment.subscriptionId,
    };
  }

  return {
    decision: EnumPaymentDecision.NothingImportant,
    serverName: serverName,
    productId: productId,
    userId: userId,
    subscriptionId: payment.subscriptionId,
  };
}

export async function cancelSubscription(
  userId: string,
  serverName?: string,
): Promise<void> {
  const userData = await getUser(userId);

  if (!userData?.mollieUid) {
    throw new HttpsError("internal", "Customer not found");
  }

  const querySnapshot = await db.collectionGroup("servers")
    .where("name", "==", serverName)
    .where("status", "==", "active")
    .get();

  if (querySnapshot.empty) {
    throw new HttpsError("internal", "Server not found");
  }

  const server = querySnapshot.docs[0].data() as ServerCreateDto;

  if (!server) {
    throw new HttpsError("internal", "Server not found");
  }

  const mollie = await createMollieClient();

  await mollie.customerSubscriptions.cancel(server.subscription, {
    customerId: userData.mollieUid,
  });
}

export async function createCustomer(displayName: string, email: string, userId: string): Promise<string> {
  const mollie = await createMollieClient();
  const customer = await mollie.customers.create({
    name: displayName,
    email: email,
    metadata: {
      uid: userId,
    },
  });
  return customer.id;
}

export enum EnumPaymentDecision {
  CreateServer,
  DeleteServer,
  NothingImportant
}
