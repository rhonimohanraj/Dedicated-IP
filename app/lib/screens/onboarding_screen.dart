import 'dart:ui';

import 'package:dedicated_ip/widgets/custom_sign_in.dart';
import 'package:flutter/material.dart' as material;
import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

import '../helpers/constants.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  bool isSignInDialogShown = false;

  @override
  Widget build(BuildContext context) {
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
        AnimatedPositioned(
          duration: const Duration(milliseconds: 240),
          top: isSignInDialogShown ? -50 : 0,
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: SafeArea(
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
                    ElevatedButton(
                      onPressed: () {
                        setState(() {
                          isSignInDialogShown = true;
                        });
                        customSignInDialog(context, onClosed: (_) {
                          if (!context.mounted) return;
                          setState(() {
                            isSignInDialogShown = false;
                          });
                        });
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.white,
                        foregroundColor: Constants.primaryColor,
                      ),
                      child: Row(
                        // Use a Row to arrange icon and text
                        mainAxisSize: MainAxisSize.min,
                        // Important: Makes the Row take only the needed space
                        children: [
                          const Text("Start now"),
                          const SizedBox(width: 8),
                          // Space between icon and text
                          Icon(Icons.arrow_forward,
                              color: Constants.primaryColor),
                          // Arrow icon
                        ],
                      ),
                    ),
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
        )
      ],
    ));
  }
}
