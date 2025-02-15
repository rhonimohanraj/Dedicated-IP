import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/widgets/custom_positioned.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class SignInForm extends StatefulWidget {
  final AuthenticationRepository authenticationRepository;

  const SignInForm({super.key, required this.authenticationRepository});

  @override
  State<SignInForm> createState() => _SignInFormState();
}

class _SignInFormState extends State<SignInForm> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool isShowLoading = false;
  bool isShowConfetti = false;
  String? _email;
  String? _password;
  String? _error;

  StateMachineController getRiveController(Artboard artBoard) {
    StateMachineController? controller =
        StateMachineController.fromArtboard(artBoard, "sign in state machine");
    if (controller != null) {
      // More robust null check
      artBoard.addController(controller);
      return controller;
    }
    throw Exception("Failed to load animation");
  }

  void signIn(BuildContext context) async {
    _error = '';
    if (_formKey.currentState != null && _formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      setState(() {
        isShowLoading = true;
      });

      try {
        await widget.authenticationRepository
            .logInWithEmailAndPassword(email: _email!, password: _password!);
      } on LogInWithEmailAndPasswordFailure catch (e) {
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
                    signIn(context);
                  },
                  icon: isShowLoading? const SizedBox(
                    height: 20,
                    width: 20,
                    child: CircularProgressIndicator(color: Colors.white,),
                  ) : const Icon(
                    CupertinoIcons.arrow_right,
                  ),
                  label: const Text("Sign In"),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
