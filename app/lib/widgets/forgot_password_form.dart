import 'package:dedicated_ip/controllers/forgot_password_controller.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ForgotPasswordForm extends StatelessWidget {
  const ForgotPasswordForm({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = Get.find<ForgotPasswordController>();

    return Form(
      key: controller.formKey,
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
              onChanged: controller.setEmail,
              style: TextStyle(color: Constants.primaryColor),
              decoration: Constants.inputDecorationOnWhiteScreen(Icons.email),
            ),
          ),
          Obx(() => controller.error.value.isNotEmpty
              ? Padding(
                  padding: const EdgeInsets.only(bottom: 16.0),
                  child: Text(
                    controller.error.value,
                    style: const TextStyle(
                      color: Colors.red,
                    ),
                  ),
                )
              : const SizedBox.shrink()),
          Padding(
            padding: const EdgeInsets.only(top: 8.0, bottom: 24),
            child: Obx(
              () => ElevatedButton.icon(
                onPressed: controller.isLoading.value
                    ? null
                    : controller.forgotPassword,
                icon: controller.isLoading.value
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
                label: const Text("Forgot Password"),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
