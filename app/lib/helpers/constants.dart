
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Constants {
  static String get appName => "Dedicated IP";

  static String get vpnInterfaceName => "DedicatedIP";

  static String get vpnBundleIdentifier => 'net.dedicated_ip.app';

  static Color get primaryColor=>
      const Color(0xff023a12);

  static String get stripePublishableKey => "pk_live_51QzxZUIRL6vuzqQIlLi8CXpGs0N4eX5MaTem3UNZhiqgvovzlLJyXMP1dQgoNsn2KZBGWwSeMK1blK0uWk0qssqK00Wjq5GXT6";

  static String get sentryDsn => "https://1fc152a80765b9306b398ba2d7d17f66@o4508776880209920.ingest.de.sentry.io/4508777507979344";

  static InputDecoration inputDecorationOnWhiteScreen(IconData icon)  => InputDecoration(
        fillColor: Constants.primaryColor,
        border: UnderlineInputBorder(
          borderSide: BorderSide(color: Constants.primaryColor),
        ),
        prefixIcon: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: Icon(
            icon,
            color: Constants.primaryColor,
          ),
        ),
        enabledBorder: UnderlineInputBorder(
          borderSide: BorderSide(
            color: Constants.primaryColor,
          ),
        ),
        focusedBorder: UnderlineInputBorder(
          borderSide: BorderSide(
            color: Constants.primaryColor,
          ),
        ),
      );

  static ThemeData darkTheme(BuildContext context) => ThemeData(
      primaryColor: Constants.primaryColor,
      primaryColorDark: Constants.primaryColor,
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: Constants.primaryColor,
          foregroundColor: Colors.white,
          disabledBackgroundColor: Constants.primaryColor,
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
        errorStyle: const TextStyle(color: Colors.red),
      ),
      appBarTheme: const AppBarTheme(elevation: 0));
}
