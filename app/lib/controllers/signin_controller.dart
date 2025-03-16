import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:dedicated_ip/widgets/custom_sign_up.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignInController extends GetxController {
  var authRepo = Get.find<AuthenticationRepository>();

  final formKey = GlobalKey<FormState>();
  final email = ''.obs;
  final password = ''.obs;
  final error = ''.obs;
  final isLoading = false.obs;

  void setEmail(String? value) => email.value = value ?? '';

  void setPassword(String? value) => password.value = value ?? '';

  void signIn() async {
    error.value = '';
    if (formKey.currentState!.validate()) {
      isLoading.value = true;
      try {
        await authRepo.logInWithEmailAndPassword(
            email: email.value, password: password.value);
        Get.offAll(() => const HomeScreen());
      } on LogInWithEmailAndPasswordFailure catch (e) {
        error.value = e.message;
        Get.snackbar("Sign In Failed", error.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      } finally {
        isLoading.value = false;
      }
    }
  }

  void signInGoogle() async {
    try {
      await authRepo.logInWithGoogle();
      Get.offAll(() => const HomeScreen());
    } on LogInWithGoogleFailure catch (e, _) {
      Get.snackbar("Sign In Failed", e.message,
          backgroundColor: Colors.red, colorText: Colors.white);
    } catch (e) {
      Get.snackbar("Sign In Failed", e.toString(),
          backgroundColor: Colors.red, colorText: Colors.white);
    }
  }

  void signInGithub() async {
    try {
      await authRepo.logInWithGitHub();
      Get.offAll(() => const HomeScreen());
    } on LogInWithGitHubFailure catch (e, _) {
      Get.snackbar("Sign In Failed", e.message,
          backgroundColor: Colors.red, colorText: Colors.white);
    } catch (e) {
      Get.snackbar("Sign In Failed", e.toString(),
          backgroundColor: Colors.red, colorText: Colors.white);
    }
  }

  void showSignUpDialog() {
    Get.back();
    Get.dialog(
      SignUpDialog(),
      barrierDismissible: true,
    );
  }
}
