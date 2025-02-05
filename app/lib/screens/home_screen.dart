import 'package:country_flags/country_flags.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../controllers/home_controller.dart';
import '../services/vpn_engine.dart';
import '../widgets/count_down_timer.dart';
import 'location_screen.dart';
import 'network_test_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = Get.put(HomeController());

  @override
  void initState() {
    _controller.getStripeData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    //Add listener to update vpn state
    VpnEngine.wireGuardFlutter.vpnStageSnapshot.listen((event) async {
      debugPrint("status is changed $event");

      _controller.vpnState.value = event.name;
    });

    return Scaffold(
      //app bar
      appBar: AppBar(
        backgroundColor: context.theme.scaffoldBackgroundColor,
        elevation: 0.0,
        actions: [
          IconButton(
              padding: const EdgeInsets.only(right: 8),
              onPressed: () => Get.to(() => const NetworkTestScreen()),
              icon: const Icon(
                Icons.settings,
                size: 27,
              )),
        ],
      ),

      //body
      body: Stack(
        children: [
          Obx(() => Image.asset(
                'assets/images/wolrd map.png',
                color: _controller.getButtonColor,
                width: Get.width,
                fit: BoxFit.fitWidth,
              )),
          Column(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
            //vpn button
            Obx(() => _vpnButton()),

            InkWell(
              onTap: () => Get.to(() => const LocationScreen()),
              child: Container(
                  decoration: BoxDecoration(
                      color: _controller.getButtonColor.withOpacity(.1),
                      border: Border.all(
                          color: _controller.getButtonColor.withOpacity(.3)),
                      borderRadius:
                          const BorderRadius.all(Radius.circular(30))),
                  padding: EdgeInsets.symmetric(horizontal: Get.width * .04),
                  margin:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
                  height: Get.height * 0.07,
                  child: Obx(() => Row(
                        children: [
                          if (_controller.vpn.value.countryLong.isNotEmpty)
                            Container(
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(5)),
                              child: CountryFlag.fromCountryCode(
                                _controller.vpn.value.countryShort
                                    .toLowerCase(),
                                height: 40,
                                width: Get.width * .15,
                                borderRadius: 10,
                              ),
                            ),

                          if (_controller.vpn.value.countryLong.isEmpty)
                            const CircleAvatar(
                              radius: 25,
                              child: Icon(Icons.vpn_lock_outlined),
                            ),
                          const SizedBox(width: 10),

                          Text(
                            _controller.vpn.value.countryLong.isEmpty
                                ? 'Select Location'
                                : _controller.vpn.value.countryLong,
                            style: const TextStyle(
                                color: Colors.white,
                                fontSize: 18,
                                fontWeight: FontWeight.w500),
                          ),

                          //for covering available spacing
                          const Spacer(),

                          //icon
                          const CircleAvatar(
                            backgroundColor: Colors.white,
                            child: Icon(Icons.keyboard_arrow_right_rounded,
                                color: Colors.blue, size: 26),
                          )
                        ],
                      ))),
            ),
          ]),
        ],
      ),
    );
  }

  //vpn button
  Widget _vpnButton() => Column(
        children: [
          //count down timer
          Obx(() => CountDownTimer(
              startTimer:
                  _controller.vpnState.value == VpnEngine.vpnConnected)),
          //button
          InkWell(
            onTap: () {
              _controller.connectToVpn();
            },
            borderRadius: BorderRadius.circular(10000),
            child: Container(
              padding: const EdgeInsets.all(25),
              decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _controller.getButtonColor.withOpacity(.1)),
              child: Container(
                padding: const EdgeInsets.all(25),
                decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _controller.getButtonColor.withOpacity(.3)),
                child: Container(
                  width: Get.height * .18,
                  height: Get.height * .18,
                  decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: _controller.getButtonColor),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(
                        Icons.power_settings_new,
                        size: 40,
                        color: Colors.white,
                      ),

                      const SizedBox(height: 5),

                      //text
                      Text(
                        _controller.getButtonText,
                        style: const TextStyle(
                            fontSize: 16,
                            color: Colors.white,
                            fontWeight: FontWeight.w600),
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          //connection status label
          Container(
            margin: EdgeInsets.only(
                top: Get.height * .015, bottom: Get.height * .02),
            padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 16),
            child: Text(
              _controller.vpnState.value == VpnEngine.vpnDisconnected
                  ? 'Not Connected'
                  : _controller.vpnState.replaceAll('_', ' ').toUpperCase(),
              style: const TextStyle(
                  fontSize: 22,
                  color: Colors.white,
                  fontWeight: FontWeight.bold),
            ),
          ),
          if (_controller.vpn.value.countryLong.isNotEmpty)
            Text(
              "IP:  " + _controller.vpn.value.ip,
              style: const TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.w500),
            ),

          SizedBox(height: Get.height * 0.02),
        ],
      );
}
