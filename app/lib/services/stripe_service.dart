import 'package:dedicated_ip/services/firebase_services.dart';
import 'package:flutter/material.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:get/get.dart';

class StripeService extends GetxController {
  final firebaseServices = Get.put(FirebaseServices());

  Future<void> checkout(String productId, String price, String label) async {
    var clientSecret =
        await firebaseServices.createPaymentLink(productId: productId);

    await Stripe.instance.initPaymentSheet(
        paymentSheetParameters: SetupPaymentSheetParameters(
      paymentIntentClientSecret: clientSecret,
      applePay: PaymentSheetApplePay(
          merchantCountryCode: "NL",
          cartItems: List.filled(
              1,
              ApplePayCartSummaryItem.recurring(
                  label: label,
                  amount: price,
                  intervalUnit: ApplePayIntervalUnit.month,
                  intervalCount: 1))),
      googlePay: PaymentSheetGooglePay(
          amount: price,
          merchantCountryCode: "NL",
          buttonType: PlatformButtonType.subscribe,
          label: label,
          currencyCode: "EUR"),
      style: ThemeMode.light,
    ));
    await Stripe.instance.presentPaymentSheet();
  }
}
