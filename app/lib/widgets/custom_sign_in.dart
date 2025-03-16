import 'package:dedicated_ip/controllers/signin_controller.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/widgets/sign_in_form.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignInDialog extends StatelessWidget {
  const SignInDialog({super.key});

  @override
  Widget build(BuildContext context) {
    var signInController = Get.put(SignInController());

    return Center(
      child: Container(
        height: 550,
        margin: const EdgeInsets.symmetric(horizontal: 16),
        padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 16),
        decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.95),
            borderRadius: const BorderRadius.all(Radius.circular(40))),
        child: Scaffold(
          backgroundColor: Colors.transparent,
          resizeToAvoidBottomInset: false,
          body: Stack(
            clipBehavior: Clip.none,
            children: [
              Column(children: [
                const Text(
                  "Sign In",
                  style: TextStyle(
                    fontSize: 34,
                    fontFamily: "Poppins",
                    color: Colors.black87,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 16),
                  child: Text(
                    "Access your account and connect to your dedicated IP VPN service.",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.black54),
                  ),
                ),
                const SignInForm(), // Pass repo to form
                const Row(
                  children: [
                    Expanded(
                      child: Divider(),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16),
                      child: Text(
                        "OR",
                        style: TextStyle(color: Colors.black87),
                      ),
                    ),
                    Expanded(
                      child: Divider(),
                    ),
                  ],
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  child: RichText(
                    text: TextSpan(
                      children: [
                        const TextSpan(
                            text: "Don't have an account? ",
                            style: TextStyle(color: Colors.black54)),
                        TextSpan(
                            text: "Sign up",
                            style: TextStyle(color: Constants.primaryColor),
                            recognizer: TapGestureRecognizer()
                              ..onTap = () {
                                signInController.showSignUpDialog();
                              }),
                      ],
                    ),
                  ),
                ),
              ]),
              Positioned(
                left: 0,
                right: 0,
                bottom: -48,
                child: InkWell(
                  onTap: (){
                    Get.back();
                  },
                  child: const CircleAvatar(
                    radius: 16,
                    backgroundColor: Colors.white,
                    child: Icon(Icons.close, color: Colors.black),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
