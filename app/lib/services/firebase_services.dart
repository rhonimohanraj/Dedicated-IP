import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info_plus/device_info_plus.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:get/get.dart';
import 'package:dedicated_ip/helpers/pref.dart';

class FirebaseServices extends GetxController {

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

  Future<void> getServers() async {
    var user = Pref.user;
    var serverCollection = await FirebaseFirestore.instance.collection('users').doc(user.id).collection("servers");
    var serversDocs = await serverCollection.get();
  }
}
