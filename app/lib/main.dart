import 'package:dedicated_ip/helpers/constants.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:sentry_flutter/sentry_flutter.dart';

import 'helpers/pref.dart';
import 'screens/splash_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  //enter full-screen
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);

  //for setting orientation to portrait only
  await SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

  await SentryFlutter.init(
    (options) {
      options.dsn =
          'https://1fc152a80765b9306b398ba2d7d17f66@o4508776880209920.ingest.de.sentry.io/4508777507979344';
      options.tracesSampleRate = 0.1;
      options.profilesSampleRate = 0.1;
    },
    appRunner: () async => {
      await Firebase.initializeApp(),
      await Pref.initializeHive(),
      runApp(
        const SentryWidget(
          child: MyApp(),
        ),
      ),
    },
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: Constants.appName,
      home: const SplashScreen(),

      themeMode: ThemeMode.dark,

      //dark theme
      darkTheme: ThemeData(
          primaryColor: Constants.primaryColor,
          primaryColorDark: Constants.primaryColor,
          elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
              backgroundColor: Constants.primaryColor,
              foregroundColor: Colors.white,
              shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(25)),
              ),
              minimumSize: const Size(double.infinity, 56),
              iconColor: Colors.white,
            ),
          ),

          scaffoldBackgroundColor: Constants.primaryColor,
          fontFamily: GoogleFonts.lato().fontFamily,
          brightness: Brightness.dark,
          textTheme: GoogleFonts.latoTextTheme(Theme.of(context).textTheme).copyWith(
            bodyMedium: const TextStyle(color: Colors.white),
            titleMedium: TextStyle(color: Constants.primaryColor),
            labelMedium: TextStyle(color: Constants.primaryColor),
            displayMedium: TextStyle(color: Constants.primaryColor),
          ),
          inputDecorationTheme: InputDecorationTheme(
            labelStyle: TextStyle(color: Constants.primaryColor),
            iconColor: Constants.primaryColor,
          ),
          appBarTheme: const AppBarTheme(elevation: 0)),
      debugShowCheckedModeBanner: false,
    );
  }
}

extension AppTheme on ThemeData {
  Color get lightText => Pref.isDarkMode ? Colors.white70 : Colors.black54;

  Color get bottomNav =>
      Pref.isDarkMode ? Colors.white12 : const Color(0xFF26401D);
}
