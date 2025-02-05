import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:dedicated_ip/apis/apis.dart';
import 'package:dedicated_ip/services/firebase_services.dart';
lpers/my_dialogs.dart';
import '../helpers/pref.dart';
import '../models/vpn.dart';
import '../services/vpn_engine.dart';

class HomeController extends GetxController {
  final Rx<Vpn> vpn = Pref.vpn.obs;
  final firebase_services = Get.put(FirebaseServices());
  final vpnState = VpnEngine.vpnDisconnected.obs;

  void connectToVpn() async {
    await VpnEngine.wireGuardFlutter.initialize(
      interfaceName: 'wg_vpn',
    );
    if (vpn.value.configDataBase64.isEmpty) {
      MyDialogs.info(msg: 'Select a Location by clicking \'Change Location\'');
      return;
    }

    if (vpn.value.premium == true &&
        firebase_services.checkPremium() == false) {
      MyDialogs.info(
          msg: 'Your subscription plan is expire \'Subscribe again\'');
      return;
    }

    if (vpnState.value == VpnEngine.vpnDisconnected) {
      final data = const Base64Decoder().convert(vpn.value.configDataBase64);
      final config = const Utf8Decoder().convert(data);

      await VpnEngine.wireGuardFlutter.startVpn(
        serverAddress: vpn.value.hostname,
        wgQuickConfig: config,
        providerBundleIdentifier: 'com.orbanvpn.wireguard.WGExtension',
      );
    } else if (vpnState.value == VpnEngine.vpnConnected) {
      //AdHelper.showRewardedVideoAd();
      VpnEngine.wireGuardFlutter.stopVpn();
    }
  }

  //Stripe data
  Future<void> getStripeData() async {
    await APIs.getStripeData();
    firebase_services.checkSubscription();
  }

  // vpn buttons color
  Color get getButtonColor {
    switch (vpnState.value) {
      case VpnEngine.vpnDisconnected:
        return CupertinoColors.activeBlue;

      case VpnEngine.vpnConnected:
        return Colors.green;

      default:
        return Colors.orangeAccent;
    }
  }

  // vpn button text
  String get getButtonText {
    switch (vpnState.value) {
      case VpnEngine.vpnDisconnected:
        return 'Start';

      case VpnEngine.vpnConnected:
        return 'Disconnect';

      default:
        return 'Connecting...';
    }
  }
}
