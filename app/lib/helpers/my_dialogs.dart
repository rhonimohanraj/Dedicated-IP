import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:dedicated_ip/helpers/pref.dart';

import '../services/firebase_services.dart';
import '../services/stripe_services.dart';

class MyDialogs {
  static success({required String msg}) {
    Get.snackbar('Success', msg,
        colorText: Colors.white, backgroundColor: Colors.green.withOpacity(.9));
  }

  static error({required String msg}) {
    Get.snackbar('Error', msg,
        colorText: Colors.white,
        backgroundColor: Colors.redAccent.withOpacity(.9));
  }

  static info({required String msg}) {
    Get.snackbar('Info', msg, colorText: Colors.white);
  }

  static showProgress() {
    Get.dialog(const Center(child: CircularProgressIndicator(strokeWidth: 2)));
  }

  subscriptionDailog({required BuildContext context}) async {
    return showGeneralDialog<void>(
      context: context,
      barrierDismissible: false,
      transitionDuration: const Duration(milliseconds: 800),
      transitionBuilder: (ctx, a1, a2, child) {
        var animation = Tween(begin: -200.0, end: 0.0).animate(a1);

        return Transform.translate(
          offset: Offset(0.0, animation.value),
          child: _filterWidget(context),
        );
      },
      pageBuilder: (BuildContext context, a1, a2) {
        return Container();
      },
    );
  }

  Widget _filterWidget(BuildContext context) {
    var theme = context.theme;
    StripeService stripeService = StripeService();
    final firebase_services = Get.put(FirebaseServices());

    return Hero(
      tag: 'filter',
      child: StatefulBuilder(
        builder: (BuildContext context, setstate) {
          return AlertDialog(
            backgroundColor: theme.scaffoldBackgroundColor,
            insetPadding: EdgeInsets.zero,
            actionsPadding: const EdgeInsets.only(right: 14),
            elevation: 0,
            shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(10))),
            content: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 2),
                child: ListBody(
                  children: <Widget>[
                    SizedBox(height: Get.height * 0.01),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            const Icon(Icons.shopping_cart),
                            SizedBox(width: Get.width * 0.03),
                            const Text(
                              'Subscription',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ],
                        ),
                        IconButton(
                            onPressed: () {
                              Get.back();
                            },
                            icon: const Icon(Icons.close))
                      ],
                    ),
                    SizedBox(height: Get.height * 0.01),
                    const Divider(),
                    const Text(
                      'Upgrade to Premium Now',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                    SizedBox(height: Get.height * 0.01),
                    const Text(
                      'Access all servers worldwide.\nfast and powerful',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    SizedBox(height: Get.height * 0.02),
                    ListTile(
                      leading: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10)),
                            color: CupertinoColors.activeBlue.withOpacity(.1)),
                        child: const Icon(Icons.block),
                      ),
                      title: const Text('No Ads'),
                      subtitle:
                          const Text('Enjoy surfing without annoying ads'),
                    ),
                    ListTile(
                      leading: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10)),
                            color: CupertinoColors.activeBlue.withOpacity(.1)),
                        child: const Icon(Icons.rocket_launch),
                      ),
                      title: const Text('Fast'),
                      subtitle: const Text('Increase connection speed'),
                    ),
                    ListTile(
                      leading: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10)),
                            color: CupertinoColors.activeBlue.withOpacity(.1)),
                        child: const Icon(CupertinoIcons.globe),
                      ),
                      title: const Text('All Servers'),
                      subtitle: const Text('Access all server worldwide'),
                    ),
                    SizedBox(height: Get.height * 0.02),
                    InkWell(
                      onTap: () async {
                        String deviceID = await firebase_services.getDeviceId();

                        await stripeService.stripePaymentCheckout(
                            stripeModel: Pref.stripeModel,
                            context: context,
                            mounted: true,
                            onCancel: () {
                              print("cancel");
                            },
                            onError: (e) {
                              print("Error " + e.toString());
                            },
                            onSuccess: () {
                              // firebase_services
                              //     .paymentComplete(
                              //         deviceId: deviceID,
                              //         days: Pref.stripeModel.days,
                              //         price: Pref.stripeModel.price)
                              //     .then((value) {
                              //   MyDialogs.success(
                              //       msg: 'Congrats! Payment Successfull');
                              // });
                            });
                      },
                      child: Container(
                        alignment: Alignment.center,
                        height: Get.height * 0.05,
                        decoration: const BoxDecoration(
                            color: Colors.amber,
                            borderRadius:
                                BorderRadius.all(Radius.circular(30))),
                        child: Text(
                          '${Pref.stripeModel.price}\$ Per Month',
                          style: const TextStyle(
                              color: Colors.black,
                              fontSize: 15,
                              fontWeight: FontWeight.bold),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
