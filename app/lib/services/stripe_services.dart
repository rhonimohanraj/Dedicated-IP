import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'package:dedicated_ip/models/stripe_model.dart';

import '../stripe_checkout/stripe_checkout.dart';

class StripeService {
  Future<String> createCheckoutSession(
      {required StripeModel stripeModel}) async {
    final url = Uri.parse("https://api.stripe.com/v1/checkout/sessions");

    String linkSelector() {
      String link =
          'success_url=https://checkout.stripe.dev/success&mode=subscription&subscription_data[description]=${stripeModel.days}_days&line_items[][price]=${stripeModel.priceKey}&line_items[][quantity]=1';

      return link;
    }

    final response = await http.post(url, body: linkSelector(), headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ${stripeModel.secretKey}',
    });

    return json.decode(response.body)["id"].toString();
  }

  Future<dynamic> stripePaymentCheckout(
      {required StripeModel stripeModel,
      required BuildContext context,
      required bool mounted,
      required Function onSuccess,
      required Function onCancel,
      required Function onError}) async {
    final String sessionId =
        await createCheckoutSession(stripeModel: stripeModel);
    final result = await redirectToCheckout(
        context: context,
        sessionId: sessionId,
        publishableKey: stripeModel.publishableKey,
        successUrl: "https://checkout.stripe.dev/success",
        canceledUrl: "https://checkout.stripe.dev/cancel");

    if (mounted) {
      final text = result!.when(
          redirected: () => "Redirected succesfully",
          success: () => onSuccess(),
          canceled: () => onCancel(),
          error: (e) => onError(e));

      return text;
    }
  }
}
