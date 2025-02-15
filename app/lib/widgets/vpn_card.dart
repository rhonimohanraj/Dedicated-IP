import 'package:country_flags/country_flags.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:dedicated_ip/helpers/my_dialogs.dart';

import '../controllers/home_controller.dart';
import '../helpers/pref.dart';
import '../models/vpn.dart';
import '../services/vpn_engine.dart';

class VpnCard extends StatelessWidget {
  final Vpn vpn;

  const VpnCard({super.key, required this.vpn});

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<HomeController>();
    void connect() {
      controller.vpn.value = vpn;
      Pref.vpn = vpn;
      Get.back();
      if (controller.vpnState.value == VpnEngine.vpnConnected) {
        VpnEngine.wireGuardFlutter.stopVpn();
        Future.delayed(
            const Duration(seconds: 2), () => controller.connectToVpn());
      } else {
        controller.connectToVpn();
      }
    }

    return InkWell(
      onTap: () {
        if (Pref.isPremium == true &&
            controller.firebase_services.checkPremium() == true) {
          connect();
        } else if (vpn.premium == true && Pref.isPremium == false) {
          //Route to stripe

          MyDialogs().subscriptionDailog(context: context);
        } else if (vpn.premium == false && Pref.isPremium == false) {
          connect();
        }
      },
      child: Container(
          margin: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
              color: Colors.transparent,
              border: Border.all(color: Colors.blueAccent),
              borderRadius: BorderRadius.circular(15)),
          child: ListTile(
            //flag
            leading: Container(
              padding: const EdgeInsets.all(.5),
              decoration: BoxDecoration(
                  border: Border.all(color: Colors.black12),
                  borderRadius: BorderRadius.circular(5)),
              child: CountryFlag.fromCountryCode(
                vpn.countryShort.toLowerCase(),
                height: 35,
                width: Get.width * .12,
                shape: RoundedRectangle(10),
              ),
            ),

            //title
            title: Text(
              vpn.countryLong,
              style: const TextStyle(fontSize: 18),
            ),

            //trailing
            trailing: vpn.premium == true
                ? Image.asset(
                    'assets/images/premium.png',
                    height: Get.height * 0.03,
                  )
                : Container(
                    child: Text('Free'),
                  ),
          )),
    );
  }
}
