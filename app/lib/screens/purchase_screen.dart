import 'package:dedicated_ip/services/firebase_services.dart';
import 'package:dedicated_ip/services/stripe_service.dart';
import 'package:dedicated_ip/widgets/product_card.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';

class PurchaseScreen extends StatefulWidget {
  PurchaseScreen({super.key});

  final firebaseServices = Get.put(FirebaseServices());
  final stripeService = Get.put(StripeService());

  @override
  State<PurchaseScreen> createState() => _PurchaseScreenState();
}

class _PurchaseScreenState extends State<PurchaseScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //app bar
      appBar: AppBar(
        backgroundColor: context.theme.scaffoldBackgroundColor,
        centerTitle: true,
        title: const Text(
          'Purchase Dedicated-IP',
          style: TextStyle(fontSize: 18),
        ),
      ),
      body: _vpnData(),
    );
  }

  _vpnData() => FutureBuilder(
      future: widget.firebaseServices.getProducts(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return _loadingWidget();
        }
        if (!snapshot.hasData || snapshot.data!.isEmpty) {
          return _noVPNFound();
        }
        return ListView.builder(
            itemCount: snapshot.data!
                .where((x) => x.title.toLowerCase().contains("xxl") == false)
                .length,
            physics: const AlwaysScrollableScrollPhysics(),
            padding: EdgeInsets.only(
                top: Get.height * .015,
                bottom: Get.height * .1,
                left: Get.width * .04,
                right: Get.width * .04),
            itemBuilder: (ctx, i) {
              var data = snapshot.data!
                  .where((x) => x.title.toLowerCase().contains("xxl") == false)
                  .toList()[i];
              if (data.title.toLowerCase().contains("xxl")) {
                return null;
              }
              return ProductCard(
                product: data,
                selected: () async {
                  await widget.stripeService.checkout(data.stripePriceId);
                },
              );
            });
      });

  _loadingWidget() => SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            //lottie animation
            LottieBuilder.asset('assets/lottie/loading.json',
                width: Get.width * .7),
          ],
        ),
      );

  _noVPNFound() => Center(
          child: Column(
        children: [
          const Text(
            "There is a issue to load services to purchase.",
            style: TextStyle(
                fontSize: 18, color: Colors.white, fontWeight: FontWeight.bold),
          ),
        ],
      ));
}
