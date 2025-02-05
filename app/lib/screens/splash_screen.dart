import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/route_manager.dart';
import 'home_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 1500), () {
      //exit full-screen
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
      //navigate to home
      Get.off(() => const HomeScreen());
      // Navigator.pushReplacement(
      //     context, MaterialPageRoute(builder: (_) => HomeScreen()));
    });
  }

  @override
  Widget build(BuildContext context) {
    //initializing media query (for getting device screen size)

    return Scaffold(
      body: Stack(
        children: [
          //app logo
          Positioned(
              left: Get.width * .3,
              top: Get.height * .2,
              width: Get.width * .4,
              child: Image.asset('assets/images/logo.png')),

          //label
          Positioned(
              bottom: Get.height * .15,
              width: Get.width,
              child: const Text(
                'MADE IN INDIA WITH ❤️',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, letterSpacing: 1),
              ))
        ],
      ),
    );
  }
}
