import 'package:dedicated_ip/firebase_options.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:dedicated_ip/screens/onboarding_screen.dart';
import 'package:firebase_app_check/firebase_app_check.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:get/get.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

import 'helpers/pref.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  //enter full-screen
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);

  //for setting orientation to portrait only
  await SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

  Stripe.publishableKey = Constants.stripePublishableKey;

  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  AndroidProvider androidProvider;
  AppleProvider appleProvider;

  if (kDebugMode) {
    androidProvider = AndroidProvider.debug;
    appleProvider = AppleProvider.debug;
  } else {
    androidProvider = AndroidProvider.playIntegrity;
    appleProvider = AppleProvider.appAttest;
  }

  await FirebaseAppCheck.instance
      .activate(androidProvider: androidProvider, appleProvider: appleProvider);

  await Pref.initializeHive();

  final authenticationRepository = AuthenticationRepository();
  await authenticationRepository.user.first;

  Get.put(authenticationRepository, permanent: true);

  if (kDebugMode) {
    runApp(const MyApp());
  } else {
    await SentryFlutter.init(
      (options) {
        options.dsn = Constants.sentryDsn;
        options.tracesSampleRate = 0.1;
        options.profilesSampleRate = 0.1;
      },
      appRunner: () async => {
        runApp(
          SentryWidget(
            child: const MyApp(),
          ),
        ),
      },
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: Constants.appName,
      home: FirebaseAuth.instance.currentUser == null
          ? OnboardingScreen()
          : HomeScreen(),
      themeMode: ThemeMode.dark,

      //dark theme
      darkTheme: Constants.darkTheme(context),
      debugShowCheckedModeBanner: false,
    );
  }
}
