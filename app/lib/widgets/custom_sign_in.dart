import 'package:dedicated_ip/widgets/custom_sign_up.dart';
import 'package:dedicated_ip/widgets/sign_in_form.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

Future<Object?> customSignInDialog(BuildContext context,
    {required ValueChanged onClosed}) {
  return showGeneralDialog(
      barrierDismissible: true,
      barrierLabel: "Sign up",
      context: context,
      transitionDuration: const Duration(milliseconds: 400),
      transitionBuilder: (context, animation, secondaryAnimation, child) {
        Tween<Offset> tween = Tween(begin: const Offset(0, -1), end: Offset.zero);
        return SlideTransition(
            position: tween.animate(
                CurvedAnimation(parent: animation, curve: Curves.easeInOut)),
            child: child);
      },
      pageBuilder: (context, _, __) => Center(
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
                    false, // avoid overflow error when keyboard shows up
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
                          "You're just steps away from a more secure and private online experience. Let's get started.",
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.black54),
                        ),
                      ),
                      const SignInForm(),
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
                        child: RichText(text: TextSpan(
                          children: [
                            TextSpan(text: "Don't have an account? ", style: TextStyle(color: Colors.black54)),
                            TextSpan(text: "Sign up", style: TextStyle(color: Colors.blue), recognizer: TapGestureRecognizer()..onTap = (){
                              Future.delayed(const Duration(milliseconds: 800), () { customSignUpDialog(context, onClosed: (_) {},);});
                            }),
                          ],
                        ),),
                      ),
                    ]),
                    const Positioned(
                      left: 0,
                      right: 0,
                      bottom: -48,
                      child: CircleAvatar(
                        radius: 16,
                        backgroundColor: Colors.white,
                        child: Icon(Icons.close, color: Colors.black),
                      ),
                    )
                  ],
                ),
              ),
            ),
          )).then(onClosed);
}
