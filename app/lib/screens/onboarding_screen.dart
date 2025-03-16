import 'dart:ui';

import 'package:dedicated_ip/controllers/onboarding_controller.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:flutter/material.dart' as material;
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:rive/rive.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    Get.put(OnboardingController());

    return Scaffold(
        body: Stack(
          children: [
            Positioned(
                width: MediaQuery.of(context).size.width * 1.7,
                bottom: 200,
                left: 100,
                child: material.Image.asset('assets/images/logo.png')),
            Positioned.fill(
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 20, sigmaY: 10),
                )),
            const RiveAnimation.asset('assets/rive/fast.riv'),
            Positioned.fill(
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 20, sigmaY: 10),
                  child: const SizedBox(),
                )),
            SafeArea(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 32),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Spacer(),
                      const SizedBox(
                        width: 260,
                        child: Column(children: [
                          Text(
                            "Dedicated IP",
                            style: TextStyle(
                                fontSize: 55, fontFamily: "Poppins", height: 1.2),
                          ),
                          SizedBox(
                            height: 16,
                          ),
                          Text("Expand Your Online Presence Worldwide.")
                        ]),
                      ),
                      const Spacer(
                        flex: 2,
                      ),
                      GetBuilder<OnboardingController>(
                        builder: (controller) => ElevatedButton(
                          onPressed: () {
                            controller.showSignInDialog();
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.white,
                            foregroundColor: Constants.primaryColor,
                          ),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              const Text("Start now"),
                              const SizedBox(width: 8),
                              // Space between icon and text
                              Icon(Icons.arrow_forward,
                                  color: Constants.primaryColor),
                            ],
                          ),
                        ),),
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 24.0),
                        child: Text(
                          "Dedicated IPs in strategic locations to unlock the full potential of the internet",
                          style: TextStyle(),
                        ),
                      )
                    ]),
              ),
            ),
          ],
        ));
  }
}
