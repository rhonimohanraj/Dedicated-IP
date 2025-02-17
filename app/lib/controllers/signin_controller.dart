import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:dedicated_ip/widgets/custom_sign_up.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignInController extends GetxController {
  final AuthenticationRepository authRepo;
  SignInController({required this.authRepo});

  final formKey = GlobalKey<FormState>();
  final email = ''.obs;
  final password = ''.obs;
  final error = ''.obs;
  final isLoading = false.obs;

  void setEmail(String? value) => email.value = value ?? '';
  void setPassword(String? value) => password.value = value ?? '';

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void signIn() async {
    error.value = ''; // Clear previous errors
    if (formKey.currentState!.validate()) {
      isLoading.value = true;
      try {
        await authRepo.logInWithEmailAndPassword(
            email: email.value, password: password.value);
        Get.offAll(() => const HomeScreen()); // Use Get.offAll for navigation
      } on LogInWithEmailAndPasswordFailure catch (e) {
        error.value = e.message;
        Get.snackbar("Sign In Failed", error.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      } finally {
        isLoading.value = false;
      }
    }
  }

  void showSignUpDialog() {
    Get.back();  //close sign in dialog
    Get.dialog(
      SignUpDialog(), // Use Get.dialog for dialogs
      barrierDismissible: true,
    );
  }
}

