import 'package:dedicated_ip/widgets/custom_sign_in.dart';
import 'package:get/get.dart';

class OnboardingController extends GetxController {
  final isSignInDialogShown = false.obs;

  void showSignInDialog() {
    isSignInDialogShown.value = true;
    Get.dialog(
      SignInDialog(), // Use Get.dialog for dialogs
      barrierDismissible: true,
    ).then((_) {
      isSignInDialogShown.value = false;
    });
  }

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onClose() {
    super.onClose();
  }
}
