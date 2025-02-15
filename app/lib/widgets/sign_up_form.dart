import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class SignUpForm extends StatefulWidget {
  final AuthenticationRepository authenticationRepository;

  const SignUpForm({super.key, required this.authenticationRepository});

  @override
  State<SignUpForm> createState() => _SignUpFormState();
}

class _SignUpFormState extends State<SignUpForm> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool isShowLoading = false;
  bool isShowConfetti = false;
  String? _email;
  String? _password;
  String? _error;

  StateMachineController getRiveController(Artboard artBoard) {
    StateMachineController? controller =
        StateMachineController.fromArtboard(artBoard, "State Machine 1");
    if (controller != null) {
      // More robust null check
      artBoard.addController(controller);
      return controller;
    }
    throw Exception("Failed to load animation");
  }

  void signUp(BuildContext context) async {
    _error = '';
    if (_formKey.currentState != null && _formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      setState(() {
        isShowLoading = true;
      });

      try {
        await widget.authenticationRepository
            .signUp(email: _email!, password: _password!);
        if (!context.mounted) {
          return;
        }
        Navigator.of(context).pushAndRemoveUntil(
          MaterialPageRoute(
            builder: (context) => const HomeScreen(),
          ),
          (route) => false,
        );
      } on SignUpWithEmailAndPasswordFailure catch (e) {
        _error = e.message;
      }

      setState(() {
        isShowLoading = false;
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
                  decoration:
                      Constants.inputDecorationOnWhiteScreen(Icons.email),
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
                  decoration:
                      Constants.inputDecorationOnWhiteScreen(Icons.password),
                ),
              ),
              if (_error != null)
                Padding(
                  padding: const EdgeInsets.only(bottom: 16.0),
                  child: Text(
                    _error!,
                    style: const TextStyle(color: Colors.red,),
                  ),
                ),
              Padding(
                padding: const EdgeInsets.only(top: 8.0, bottom: 24),
                child: ElevatedButton.icon(
                  onPressed: () {
                    signUp(context);
                  },
                  icon: isShowLoading
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(
                            color: Colors.white,
                          ),
                        )
                      : const Icon(
                          CupertinoIcons.arrow_right,
                        ),
                  label: const Text("Sign Up"),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
