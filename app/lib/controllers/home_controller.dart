import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/models/server.dart';
import 'package:dedicated_ip/services/ip_service.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../helpers/my_dialogs.dart';
import '../helpers/pref.dart';
import '../services/firebase_services.dart';
import '../services/vpn_engine.dart';

class HomeController extends GetxController {
  final Rx<Server> server = Pref.server.obs;
  final firebaseServices = Get.put(FirebaseServices());
  final ipService = Get.put(IpService());

  final vpnState = VpnEngine.vpnDisconnected.obs;
  final loadingVpnConfig = false.obs;

  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging.instance;

  Future<void> connectToVpn() async {
    if (server.value.id.isBlank == true) {
      MyDialogs.info(msg: 'Select a Dedicated IP by clicking \'Select Dedicated-IP\'');
      return;
    }

    await VpnEngine.wireGuardFlutter.initialize(
      interfaceName: Constants.vpnInterfaceName,
    );

    if (vpnState.value == VpnEngine.vpnDisconnected) {
      loadingVpnConfig.value = true;
      var config = await firebaseServices.getVPNConfig(server.value.name);
      loadingVpnConfig.value = false;

      await VpnEngine.wireGuardFlutter.startVpn(
        serverAddress: server.value.hostname,
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

  Future<void> setFCMToken(String token) async {
    await firebaseServices.addFCMToken(token);
  }

  void requestPermissions() async {
    await _firebaseMessaging.requestPermission(
      alert: true,
      announcement: true,
      badge: true,
      carPlay: true,
      criticalAlert: false,
      provisional: false,
      sound: true,
    );
  }

  void configureFirebaseMessaging() async {
    String? token = await _firebaseMessaging.getToken();
    if (token != null) {
      await setFCMToken(token);
    }

    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      if (message.notification != null) {
        Get.snackbar(message.notification!.title.toString(),
            message.notification!.body.toString());
      }
    });

    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
      if (message.notification != null) {
        Get.snackbar(message.notification!.title.toString(),
            message.notification!.body.toString());
      }
    });
  }

  // vpn buttons color
  Color get getButtonColor {
    if(loadingVpnConfig.value) return Colors.blueAccent;

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
    if(loadingVpnConfig.value) return 'fetch config...';

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
