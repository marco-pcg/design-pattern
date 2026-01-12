

import 'package:app/app/theme_toggle.dart';
import 'package:flutter/material.dart';

class HocWrapperPage extends StatelessWidget {

  const HocWrapperPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('HOC Wrapper'),
        actions: const [ThemeToggle()],
      ),
      body: Text('missing'),
    );
  }
}