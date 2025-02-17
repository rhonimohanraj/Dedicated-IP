import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SignUpController extends GetxController {
  final AuthenticationRepository authRepo;
  SignUpController({required this.authRepo});

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

  void signUp() async {
    error.value = ''; // Clear previous errors
    if (formKey.currentState!.validate()) {
      isLoading.value = true;
      try {
        await authRepo.signUp(email: email.value, password: password.value);
        Get.offAll(() => const HomeScreen()); // Use Get.offAll for navigation
      } on SignUpWithEmailAndPasswordFailure catch (e) {
        error.value = e.message;
        Get.snackbar("Sign Up Failed", error.value,
            backgroundColor: Colors.red, colorText: Colors.white);
      } finally {
        isLoading.value = false;
      }
    }
  }
}
