import 'package:dedicated_ip/controllers/signup_controller.dart';
import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/widgets/sign_up_form.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignUpDialog extends StatelessWidget {
  const SignUpDialog({super.key});

  @override
  Widget build(BuildContext context) {
    var signUpController = Get.put(SignUpController());

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
          resizeToAvoidBottomInset:
          false,
          body: Stack(
            clipBehavior: Clip.none,
            children: [
              Column(children: [
                const Text(
                  "Sign Up",
                  style: TextStyle(
                    fontSize: 34,
                    fontFamily: "Poppins",
                    color: Colors.black87,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 16),
                  child: Text(
                    "You're just steps away from a more secure and private online experience. Let's get started.",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.black54),
                  ),
                ),
                const SignUpForm(),
                const Row(
                  children: [
                    Expanded(
                      child: Divider(),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16),
                      child: Text(
                        "Sign Up with",
                        style: TextStyle(color: Colors.black87),
                      ),
                    ),
                    Expanded(
                      child: Divider(),
                    ),
                  ],
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10),
                      child: TextButton(
                        onPressed: signUpController.signUpGithub,
                        style: ButtonStyle(
                          backgroundColor: WidgetStatePropertyAll(
                              Color.fromRGBO(241, 113, 113, 1)),
                          foregroundColor:
                          WidgetStatePropertyAll(Colors.white),
                        ),
                        child: const Text("Google"),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10),
                      child: TextButton(
                        onPressed: signUpController.signUpGithub,
                        style: ButtonStyle(
                          backgroundColor: WidgetStatePropertyAll(
                              Color.fromRGBO(73, 80, 87, 1)),
                          foregroundColor:
                          WidgetStatePropertyAll(Colors.white),
                        ),
                        child: const Text("Github"),
                      ),
                    ),
                  ],
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
