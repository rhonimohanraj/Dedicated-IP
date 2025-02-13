import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/widgets/custom_positioned.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class SignUpForm extends StatefulWidget {
  const SignUpForm({super.key});

  @override
  State<SignUpForm> createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool isShowLoading = false;
  bool isShowConfetti = false;
  String? _email;
  String? _password;

  late SMITrigger check;
  late SMITrigger error;
  late SMITrigger reset;

  late SMITrigger confetti;

  StateMachineController getRiveController(Artboard artBoard) {
    StateMachineController? controller =
    StateMachineController.fromArtboard(artBoard, "State Machine 1");
    if (controller != null) { // More robust null check
      artBoard.addController(controller);
      return controller;
    }
    throw Exception("Failed to load animation");
  }

  void signIn(BuildContext context) {
    if (_formKey.currentState != null && _formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      setState(() {
        isShowLoading = true; // Show loading only if validation passes
      });

      // Simulate authentication delay (only called if form is valid)
      Future.delayed(const Duration(seconds: 1), () {
        // Successful sign-in
        check.fire();
        Future.delayed(const Duration(seconds: 2), () {
          setState(() {
            isShowLoading = false;
            isShowConfetti = true;
          });
          confetti.fire();
        });
      });
    } else {
      // Validation failed - show error animation and DO NOT start loading
      error.fire();
      Future.delayed(const Duration(seconds: 2), () {
        // Stop the error animation (if you have a reset trigger)
        // reset.fire(); // If you have a reset trigger in your Rive animation
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Email",
                style: TextStyle(color: Constants.primaryColor),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 8.0, bottom: 16),
                child: TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Please enter your email";
                    }
                    return null;
                  },
                  onSaved: (email) => _email = email,
                  style: TextStyle(color: Constants.primaryColor),
                  decoration: Constants.inputDecorationOnWhiteScreen(Icons.email),
                ),
              ),
              Text(
                "Password",
                style: TextStyle(color: Constants.primaryColor),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 8.0, bottom: 16),
                child: TextFormField(
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return "Please enter your password";
                    }
                    if (value.length < 6) {
                      return "Password must be at least 6 characters";
                    }
                    return null;
                  },
                  onSaved: (password) => _password = password,
                  obscureText: true,
                  decoration: Constants.inputDecorationOnWhiteScreen(Icons.password),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 8.0, bottom: 24),
                child: ElevatedButton.icon(
                  onPressed: () {
                    signIn(context);
                  },
                  icon: const Icon(
                    CupertinoIcons.arrow_right,
                  ),
                  label: const Text(
                    "Sign Up"
                  ),
                ),
              ),
            ],
          ),
        ),
        isShowLoading
            ? CustomPositioned(
          child: RiveAnimation.asset(
            "assets/rive/check.riv", // Replace with your actual path
            onInit: (artBoard) {
              StateMachineController controller =
              getRiveController(artBoard);
              check = controller.findSMI("Check") as SMITrigger;
              error = controller.findSMI("Error") as SMITrigger;
              reset = controller.findSMI("Reset") as SMITrigger;
            },
          ),
        )
            : const SizedBox(),
        isShowConfetti
            ? CustomPositioned(
          child: Transform.scale(
            scale: 2, // Adjusted scale
            child: RiveAnimation.asset(
              "assets/rive/confetti.riv", // Replace with your actual path
              onInit: (artboard) {
                StateMachineController controller =
                getRiveController(artboard);
                confetti =
                controller.findSMI("Trigger explosion") as SMITrigger;
              },
            ),
          ),
        )
            : const SizedBox(),
      ],
    );
  }
}


