import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info_plus/device_info_plus.dart';
import 'package:get/get.dart';
import 'package:dedicated_ip/helpers/pref.dart';

class FirebaseServices extends GetxController {
  CollectionReference subscriptions =
      FirebaseFirestore.instance.collection('Subscriptions');

  CollectionReference servers =
      FirebaseFirestore.instance.collection('wireguard_server');
  Future<void> paymentComplete(
      {required String deviceId, required int price, required int days}) async {
    await subscriptions.doc(deviceId).set({
      'price': price,
      'deviceId': deviceId,
      'expiryDate': DateTime.now().add(Duration(days: days)),
      'timestamp': DateTime.now(),
    });

    Pref.isPremium = true;
    Pref.expiryDate = DateTime.now().add(Duration(days: days)).toString();
  }

  Future<String> getDeviceId() async {
    DeviceInfoPlugin deviceInfo = DeviceInfoPlugin();
    if (Platform.isIOS) {
      IosDeviceInfo iosInfo = await deviceInfo.iosInfo;
      return iosInfo.identifierForVendor.toString();
    } else if (Platform.isWindows) {
      WindowsDeviceInfo windowsInfo = await deviceInfo.windowsInfo;
      return windowsInfo.deviceId;
    } else if(Platform.isLinux){
      LinuxDeviceInfo linuxInfo = await deviceInfo.linuxInfo;
      return linuxInfo.machineId!;
    } else if(Platform.isMacOS){
      MacOsDeviceInfo macOsInfo = await deviceInfo.macOsInfo;
      return macOsInfo.systemGUID!;
    } else {
      AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
      return androidInfo.id;
    }
  }

  Future<void> checkSubscription() async {
    String id = await getDeviceId();
    await subscriptions.doc(id).get().then((DocumentSnapshot documentSnapshot) {
      if (documentSnapshot.exists) {
        var doc = documentSnapshot.data() as Map<String, dynamic>;

        DateTime date = (doc["expiryDate"] as Timestamp).toDate();

        var dateDeff = date.difference(DateTime.now()).inDays;
        Pref.expiryDate = date.toString();
        if (dateDeff >= 1) {
          Pref.isPremium = true;
        } else {
          Pref.isPremium = false;
        }
      } else {
        Pref.isPremium = false;
      }
    });
  }

  bool checkPremium() {
    final date = DateTime.parse(Pref.expiryDate);
    var dateDeff = date.difference(DateTime.now()).inDays;

    if (dateDeff >= 1) {
      return true;
    } else {
      return false;
    }
  }
}
