import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:cloud_functions/cloud_functions.dart';
import 'package:dedicated_ip/models/server.dart';
import 'package:device_info_plus/device_info_plus.dart';
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
    } else if (Platform.isLinux) {
      LinuxDeviceInfo linuxInfo = await deviceInfo.linuxInfo;
      return linuxInfo.machineId!;
    } else if (Platform.isMacOS) {
      MacOsDeviceInfo macOsInfo = await deviceInfo.macOsInfo;
      return macOsInfo.systemGUID!;
    } else {
      AndroidDeviceInfo androidInfo = await deviceInfo.androidInfo;
      return androidInfo.id;
    }
  }

  Future<List<Server>> getServers() async {
    await Future.delayed(Duration(seconds: 5));

    var user = Pref.user;
    var serverCollection = await FirebaseFirestore.instance
        .collection('users')
        .doc(user.id)
        .collection("servers");
    var serversDocs = await serverCollection.get();
    var servers =
    serversDocs.docs.map((e) => Server.fromJson(e.data(), e.id)).toList();
    Pref.servers = servers;
    return servers;
  }

  Future<String> reverseProxy({
    required String domainName,
    required String functionName,
    required Object body,
  }) async {
    try {
      final HttpsCallable callable = FirebaseFunctions.instance.httpsCallable(
        'onReverseProxy', // The name of your Cloud Function
        options: HttpsCallableOptions(
          limitedUseAppCheckToken: true,
        ),
      );

      final HttpsCallableResult result = await callable.call(<String, dynamic>{
        'domainName': domainName,
        'functionName': functionName,
        'body': body,
      });

      if (result.data is String) {
        return result.data;
      }
      else {
        throw Exception('Cloud Function returned null data.');
      }
    } on FirebaseFunctionsException catch (e) {
      throw Exception('Firebase Functions Error: ${e.message}');
    } catch (e) {
      throw Exception('Error calling Cloud Function: $e');
    }
  }

  Future<String> getVPNConfig(String domainName) async  {
    return await reverseProxy(functionName: "client", domainName: domainName, body: {"name": await getDeviceId()});
  }
}
