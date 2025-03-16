import 'package:dedicated_ip/widgets/custom_sign_in.dart';
import 'package:get/get.dart';

class OnboardingController extends GetxController {
  void showSignInDialog() {
    Get.dialog(
      SignInDialog(),
      barrierDismissible: true,
    );
  }
}
