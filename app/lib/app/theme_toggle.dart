

import 'package:app/app/theme_controller.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ThemeToggle extends StatelessWidget {

  const ThemeToggle({super.key});

  @override
  Widget build(BuildContext context) {
    final controller = context.watch<ThemeController>();

    return IconButton(
      icon: Icon(
        controller.mode == ThemeMode.dark
          ? Icons.dark_mode
          : Icons.light_mode,
      ),
      onPressed: controller.toggleTheme,
    );
  }
}