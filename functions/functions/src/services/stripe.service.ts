// functions/src/services/stripe.service.ts
import {createStripeClient} from "../config/stripe.config";
import Stripe from "stripe";
import {HttpsError} from "firebase-functions/v1/https";
import {remoteConfig} from "../config/firebase.config";
import {Product, ProductDto} from "../dto/product.dto";

export async function updateProductsStripe(): Promise<void> {
  const template = await remoteConfig.getTemplate();
  let productsParam = template.parameters.Products?.defaultValue?.value as string;

  if (!productsParam) {
    console.warn("No products found in Remote Config.");
    return;
  }

  const products = JSON.parse(
    productsParam
  ) as ProductDto;

  const stripe = await createStripeClient();

  for (const product of products.products) {
    let price: any;
    try {
      price = await stripe.prices.retrieve(product.stripePriceId);
    } catch (e) {
      product.stripePriceId = await createPrice(product);
      price = await stripe.prices.retrieve(product.stripePriceId);
    }

    if (!price) {
      console.error(`Price not found for product ${product.id}.`);
      continue;
    }

    if (price.unit_amount !== product.discountPrice * 100) {
      console.error(`Price for product ${product.id} is outdated.`);
      price.unit_amount = product.discountPrice * 100;
      await stripe.prices.update(product.stripePriceId, {
        active: false,
      });
      price = await stripe.prices.create({
        product: product.id,
        unit_amount: product.discountPrice * 100,
        currency: "eur",
        recurring: {
          interval: product.duration === "month" ? "month" : product.duration === "year" ? "year" : "day",
          interval_count: 1,
        },
        metadata: {
          productId: product.id, // S
        },
        active: true,
      });
    }

    product.stripePriceId = price.id;
  }

  productsParam = JSON.stringify(products);

  template.parameters.Products = {
    defaultValue: {
      value: productsParam,
    },
  };

  await remoteConfig.publishTemplate(template);

  const priceList = await stripe.prices.list({
    limit: 100,
    active: true,
  });

  for (const price of priceList.data) {
    if (!products.products.find((product) => product.stripePriceId === price.id)) {
      await stripe.prices.update(price.id, {
        active: false,
      });
    }
  }
}

async function createPrice(product: Product): Promise<string> {
  const stripe = await createStripeClient();
  try {
    const existingProduct = await stripe.products.retrieve(product.id);
    if (existingProduct.default_price) {
      return existingProduct.default_price.toString();
    } else {
      const price = await stripe.prices.create({
        product: existingProduct.id,
        unit_amount: product.discountPrice * 100,
        currency: "eur",
        recurring: {
          interval: product.duration === "month" ? "month" : product.duration === "year" ? "year" : "day",
          interval_count: 1,
        },
        metadata: {
          productId: product.id, // S
        },
        active: true,
      });
      return price.id;
    }
  } catch (e) {
    console.log(`Product ${product.id} does not exist.`);
    const productResult = await stripe.products.create({
      id: product.id,
      name: product.title,
      description: product.description,
      metadata: {
        productId: product.id,
        location: `${product.location.country}-${product.location.datacenter}`,
        datacenter: product.location.datacenter,
        server: product.server,
      },
      marketing_features: product.features.map((feature) => {
        return {name: feature};
      }),
      statement_descriptor: product.title.slice(0, 22),
      unit_label: product.duration,
      active: true,
      url: "https://dedicated-ip.net",
      images: ["https://d.dedicated-ip.net/images/logo-dark.png"],
    });
    const price = await stripe.prices.create({
      product: productResult.id,
      unit_amount: product.discountPrice * 100,
      currency: "eur",
      recurring: {
        interval: product.duration === "month" ? "month" : product.duration === "year" ? "year" : "day",
        interval_count: 1,
      },
      metadata: {
        productId: product.id, // S
      },
      active: true,
    });
    return price.id;
  }
}

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  uid: string,
  serverName?: string,
): Promise<string> {
  const stripe = await createStripeClient();
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    customer: customerId,
    metadata: {
      uid,
      priceId,
      serverName: serverName ?? "",
    },
    success_url: "https://d.dedicated-ip.net/d/servers?payment=success",
    cancel_url: "https://d.dedicated-ip.net/d/servers?payment=cancel",
  });

  if (!session || !session.url) {
    throw new HttpsError("internal", "Failed to create checkout session");
  }

  return session.url;
}

export async function createBillingPortalSession(
  customerId: string
): Promise<string> {
  const stripe = await createStripeClient();
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: "https://d.dedicated-ip.net/d/servers",
  });
  if (!session || !session.url) {
    throw new HttpsError("internal", "Failed to create billing portal session");
  }
  return session.url;
}

export async function handleCheckoutCompleted(eventData: Stripe.Checkout.Session) {
  if (eventData.mode !== "subscription" || eventData.payment_status !== "paid") {
    return;
  }
  const uid = eventData.metadata?.uid;
  if (!uid) {
    throw new Error("UID is undefined in event metadata.");
  }
  return {uid: uid, priceId: eventData.metadata?.priceId, serverName: eventData.metadata?.serverName, subscription: eventData.subscription};
}
