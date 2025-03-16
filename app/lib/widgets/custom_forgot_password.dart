import 'package:dedicated_ip/controllers/forgot_password_controller.dart';
import 'package:dedicated_ip/widgets/forgot_password_form.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class forgotPasswordDialog extends StatelessWidget {
  const forgotPasswordDialog({super.key});

  @override
  Widget build(BuildContext context) {
    Get.put(ForgotPasswordController());

    return Center(
      child: Container(
        height: 350,
        margin: const EdgeInsets.symmetric(horizontal: 16),
        padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 16),
        decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.95),
            borderRadius: const BorderRadius.all(Radius.circular(40))),
        child: Scaffold(
          backgroundColor: Colors.transparent,
          resizeToAvoidBottomInset:
              false,
          body: Stack(
            clipBehavior: Clip.none,
            children: [
              Column(children: [
                const Text(
                  "Forgot Password",
                  style: TextStyle(
                    fontSize: 34,
                    fontFamily: "Poppins",
                    color: Colors.black87,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 16),
                  child: Text(
                    "Regain access to your secure, dedicated IP VPN in minutes.",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.black54),
                  ),
                ),
                const ForgotPasswordForm(),
              ]),
              Positioned(
                left: 0,
                right: 0,
                bottom: -48,
                child: InkWell(
                  onTap: () {
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
