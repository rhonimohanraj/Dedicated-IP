import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../helpers/my_dialogs.dart';
import '../helpers/pref.dart';
import '../models/vpn.dart';
import '../services/firebase_services.dart';
import '../services/vpn_engine.dart';

class HomeController extends GetxController {
  final Rx<Vpn> vpn = Pref.vpn.obs;
  final firebaseServices = Get.put(FirebaseServices());
  final vpnState = VpnEngine.vpnDisconnected.obs;

  void connectToVpn() async {
    await VpnEngine.wireGuardFlutter.initialize(
      interfaceName: 'Dedicated_IP',
    );


    var server = Pref.servers.where((y)=>y.status == 'active').first;
    vpnState.value = VpnEngine.vpnConnecting;

    var config = await firebaseServices.reverseProxy(functionName: "client/${firebaseServices.getDeviceId()}", domainName: server.server, body: null);

    return;



    if (vpn.value.configDataBase64.isEmpty) {
      MyDialogs.info(msg: 'Select a Location by clicking \'Change Location\'');
      return;
    }

    if (vpnState.value == VpnEngine.vpnDisconnected) {
      final data = const Base64Decoder().convert(vpn.value.configDataBase64);
      final config = const Utf8Decoder().convert(data);

      await VpnEngine.wireGuardFlutter.startVpn(
        serverAddress: vpn.value.hostname,
        wgQuickConfig: config,
        providerBundleIdentifier: 'net.dedicated_ip.app',
      );
    } else if (vpnState.value == VpnEngine.vpnConnected) {
      VpnEngine.wireGuardFlutter.stopVpn();
    }
  }

  Future<void> getServers() async {
    await firebaseServices.getServers();
  }

  // vpn buttons color
  Color get getButtonColor {
    switch (vpnState.value) {
      case VpnEngine.vpnDisconnected:
        return CupertinoColors.activeGreen;

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
