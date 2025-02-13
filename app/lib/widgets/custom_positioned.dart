import 'package:flutter/material.dart';

class CustomPositioned extends StatelessWidget {
  const CustomPositioned({super.key, required this.child, this.size = 100});

  final Widget child;
  final double size;

  @override
  Widget build(BuildContext context) {
    return Positioned.fill(
      child: Center( // Use Center widget for better positioning
        child: SizedBox(
          height: size,
          width: size,
          child: child,
        ),
      ),
    );
  }
}
