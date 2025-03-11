import 'package:dedicated_ip/helpers/my_dialogs.dart';
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
      merchantDisplayName: "Dedicated-IP",
      // applePay: PaymentSheetApplePay(
      //     buttonType: PlatformButtonType.subscribe,
      //     request: PaymentRequestType.recurring(
      //         description: label,
      //         managementUrl: "https://d.dedicated-ip.net",
      //         billing: RecurringCartSummaryItem(
      //             label: label,
      //             amount: price,
      //             intervalUnit: ApplePayIntervalUnit.month,
      //             intervalCount: 1)),
      //     merchantCountryCode: "NL",
      //     cartItems: List.filled(
      //         1,
      //         ApplePayCartSummaryItem.recurring(
      //             label: label,
      //             amount: price,
      //             intervalUnit: ApplePayIntervalUnit.month,
      //             intervalCount: 1))),
      googlePay: PaymentSheetGooglePay(
          amount: price,
          merchantCountryCode: "NL",
          buttonType: PlatformButtonType.subscribe,
          label: label,
          currencyCode: "EUR"),
      style: ThemeMode.light,
    ));
    try {
      await Stripe.instance.presentPaymentSheet();
      MyDialogs.success(msg: "Payment Successful, Your server will be provisioned shortly, You will receive a confirmation email shortly.");
    } on StripeException catch (e, _) {
      MyDialogs.error(msg: e.error.localizedMessage ?? "An error occured while processing payment");
    }
  }
}
