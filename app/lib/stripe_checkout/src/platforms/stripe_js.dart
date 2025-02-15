library stripe;

class Stripe {
  external Stripe(String publicKey, [StripeOptions? options]);
  external String get publicKey;
  external redirectToCheckout(StripeServerCheckoutOptions checkoutOptions);
}

abstract class StripeServerCheckoutOptions {
  external String get sessionId;
  external set sessionId(String v);
  external factory StripeServerCheckoutOptions({String sessionId});
}

abstract class StripeOptions {
  external String? get stripeAccount;
  external set stripeAccount(String? v);

  external factory StripeOptions({
    String? stripeAccount,
  });
}
