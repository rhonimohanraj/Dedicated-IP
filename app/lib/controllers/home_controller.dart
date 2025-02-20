import 'package:dedicated_ip/helpers/constants.dart';
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
      interfaceName: Constants.vpnInterfaceName,
    );

    var server = Pref.servers.where((y)=>y.status == 'active').first;

    if (server.isEmpty()) {
      MyDialogs.info(msg: 'Select a Location by clicking \'Change Location\'');
      return;
    }

    if (vpnState.value == VpnEngine.vpnDisconnected) {
      var config = await firebaseServices.getVPNConfig(server.name);

      await VpnEngine.wireGuardFlutter.startVpn(
        serverAddress: server.hostname,
        wgQuickConfig: config,
        providerBundleIdentifier: Constants.vpnBundleIdentifier,
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
