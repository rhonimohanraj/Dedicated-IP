import 'dart:ui';

import 'package:flutter/material.dart';

class Constants {
  static String get appName => "Dedicated IP";

  static Color get primaryColor=>
      const Color(0xff023a12); // Example using Color
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
}
