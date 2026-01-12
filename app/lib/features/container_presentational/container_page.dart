

import 'package:app/app/theme_toggle.dart';
import 'package:app/features/container_presentational/dog_images_container.dart';
import 'package:flutter/material.dart';

class ContainerPage extends StatelessWidget {

  const ContainerPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Container / Presentational'),
        actions: const [ThemeToggle()],
      ),
      body: const DogImagesContainer(),
    );
  }
}