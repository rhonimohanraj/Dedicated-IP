import 'dart:io';

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:orban_vpn_wireguard/helpers/config.dart';

import 'helpers/ad_helper.dart';
import 'helpers/pref.dart';
import 'screens/splash_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  //enter full-screen
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);
  await Firebase.initializeApp();
  await Pref.initializeHive();
  if (Platform.isIOS || Platform.isAndroid) {
    await AdHelper.initAds();
  }

  //for setting orientation to portrait only
  SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]).then((v) {
    runApp(const MyApp());
  });
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: Config.appName,
      home: const SplashScreen(),

      themeMode: ThemeMode.dark,

      //dark theme
      darkTheme: ThemeData(
          scaffoldBackgroundColor: const Color(0xff021b3a),
          // fontFamily: GoogleFonts.lato().fontFamily,
          brightness: Brightness.dark,
          appBarTheme: const AppBarTheme(elevation: 0)),
      debugShowCheckedModeBanner: false,
    );
  }
}

extension AppTheme on ThemeData {
  Color get lightText => Pref.isDarkMode ? Colors.white70 : Colors.black54;
  Color get bottomNav => Pref.isDarkMode ? Colors.white12 : Colors.blue;
}
