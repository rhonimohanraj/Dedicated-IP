import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:lottie/lottie.dart';
import 'package:orban_vpn_wireguard/models/vpn.dart';
import 'package:orban_vpn_wireguard/services/firebase_services.dart';
import '../controllers/native_ad_controller.dart';
import '../helpers/ad_helper.dart';
import '../widgets/vpn_card.dart';

class LocationScreen extends StatefulWidget {
  const LocationScreen({super.key});

  @override
  State<LocationScreen> createState() => _LocationScreenState();
}

class _LocationScreenState extends State<LocationScreen> {
  final _adController = NativeAdController();
  @override
  void initState() {
    if (Platform.isIOS || Platform.isAndroid) {
      _adController.ad = AdHelper.loadNativeAd(adController: _adController);
    }

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //app bar
      appBar: AppBar(
        backgroundColor: context.theme.scaffoldBackgroundColor,
        centerTitle: true,
        title: const Text(
          'VPN Locations',
          style: TextStyle(fontSize: 18),
        ),
      ),
      bottomNavigationBar: _adController.ad != null &&
              _adController.adLoaded.isTrue
          ? SafeArea(
              child:
                  SizedBox(height: 85, child: AdWidget(ad: _adController.ad!)))
          : null,
      body: _vpnData(),
    );
  }

  _vpnData() => StreamBuilder(
      stream: FirebaseServices().servers.snapshots(),
      builder: (context, snapshot) {
        if (!snapshot.hasData) {
          return _noVPNFound();
        }
        if (snapshot.connectionState == ConnectionState.waiting) {
          return _loadingWidget();
        }
        return ListView.builder(
            itemCount: snapshot.data!.docs.length,
            physics: const AlwaysScrollableScrollPhysics(),
            padding: EdgeInsets.only(
                top: Get.height * .015,
                bottom: Get.height * .1,
                left: Get.width * .04,
                right: Get.width * .04),
            itemBuilder: (ctx, i) {
              var data = snapshot.data!.docs[i]["serverDetail"]
                  as Map<String, dynamic>;
              return VpnCard(vpn: Vpn.fromJson(data));
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

            //text
            const Text(
              'Loading VPNs... 😌',
              style: TextStyle(
                  fontSize: 18,
                  color: Colors.white,
                  fontWeight: FontWeight.bold),
            )
          ],
        ),
      );

  _noVPNFound() => const Center(
        child: Text(
          'VPNs Not Found! 😔',
          style: TextStyle(
              fontSize: 18, color: Colors.white, fontWeight: FontWeight.bold),
        ),
      );
}
