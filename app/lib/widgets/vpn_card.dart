import 'package:country_flags/country_flags.dart';
import 'package:dedicated_ip/models/server.dart';
import 'package:dedicated_ip/services/ip_service.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controllers/home_controller.dart';
import '../helpers/pref.dart';
import '../services/vpn_engine.dart';

class VpnCard extends StatelessWidget {
  final Server server;

  const VpnCard({super.key, required this.server});

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<HomeController>();
    final ipService = Get.put(IpService());

    void connect() {
      controller.server.value = server;
      Pref.server = server;
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
        if (server.status != 'active') {
          return;
        }
        connect();
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
                server.countryCode.toLowerCase(),
                height: 35,
                width: Get.width * .12,
                shape: RoundedRectangle(10),
              ),
            ),

            title: Text(
              server.name,
              style: const TextStyle(fontSize: 18),
            ),

            subtitle: server.status == 'active' ? FutureBuilder(
                future: ipService.getIp(server.hostname),
                builder: (context, snapshot) => Text(snapshot.data ?? '')) : null,

            trailing: true == true
                ? Image.asset(
                    'assets/images/premium.png',
                    height: Get.height * 0.03,
                  )
                : Text('Free'),
          )),
    );
  }
}
