import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/screens/network_test_screen.dart';
import 'package:dedicated_ip/services/firebase_services.dart';
import 'package:dedicated_ip/widgets/product_card.dart';
import 'package:dedicated_ip/widgets/server_card.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:lottie/lottie.dart';

class PurchaseScreen extends StatefulWidget {
  PurchaseScreen({super.key});

  final firebaseServices = Get.put(FirebaseServices());

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
            itemCount: snapshot.data!.length,
            physics: const AlwaysScrollableScrollPhysics(),
            padding: EdgeInsets.only(
                top: Get.height * .015,
                bottom: Get.height * .1,
                left: Get.width * .04,
                right: Get.width * .04),
            itemBuilder: (ctx, i) {
              var data = snapshot.data![i];
              return ProductCard(product: data);
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
            "You didn't purchase any servers yet.",
            style: TextStyle(
                fontSize: 18, color: Colors.white, fontWeight: FontWeight.bold),
          ),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.white,
              foregroundColor: Constants.primaryColor,
            ),
            child: Row(
              // Use a Row to arrange icon and text
              mainAxisSize: MainAxisSize.min,
              // Important: Makes the Row take only the needed space
              children: [
                const Text("Buy now"),
                const SizedBox(width: 8),
                // Space between icon and text
                Icon(Icons.arrow_forward, color: Constants.primaryColor),
                // Arrow icon
              ],
            ),
          ),
        ],
      ));
}
