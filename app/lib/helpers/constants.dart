import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Constants {
  static String get appName => "Dedicated IP";

  static String get vpnInterfaceName => "Dedicated_IP";

  static String get vpnBundleIdentifier => 'net.dedicated_ip.app';

  static Color get primaryColor=>
      const Color(0xff023a12);

  static String get stripePublishableKey => "pk_live_51QPqSYJiFl8kjHM0w3xaAHNQBo9QVwlfCptKIoFdxPCHEYYO8OezcxRXeLPlRZxt2hFPODyVuwBR4em2OGWEYQwT00z1z4MhdI";
  static String get stripePublishableKeyTest => "pk_test_51QPqSYJiFl8kjHM0GBPuuxyq45pzMUv3407s7yksgDrt9lLHk7lmSzjvQ9D1jR1SWaujmZcx6z05eZ507FNXF8Zh00urSX4bYy";

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
