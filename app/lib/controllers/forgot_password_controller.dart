import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ForgotPasswordController extends GetxController {
  var authRepo = Get.find<AuthenticationRepository>();

  ForgotPasswordController();

  final formKey = GlobalKey<FormState>();
  final email = ''.obs;
  final error = ''.obs;
  final isLoading = false.obs;

  void setEmail(String? value) => email.value = value ?? '';

  void forgotPassword() async {
    error.value = '';
    if (formKey.currentState!.validate()) {
      isLoading.value = true;
      try {
        await authRepo.sendPasswordResetEmail(email: email.value);
        Get.snackbar("Forgot Password",
            "Check your email inbox, we sent you a link to reset your password.",
            backgroundColor: Colors.green, colorText: Colors.white);
      } on ResetPasswordFailure catch (e) {
        error.value = e.message;
        Get.snackbar("Forgot Password Failed", error.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      } finally {
        isLoading.value = false;
      }
    }
  }
}
