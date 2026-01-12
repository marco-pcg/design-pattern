import 'package:app/app/app_router.dart';
import 'package:app/app/theme_controller.dart';
import 'package:app/app/theme_toggle.dart';
import 'package:app/features/container_presentational/dog_images_container.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => ThemeController(),
      child: const MyApp(),
    )
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final themeController = context.watch<ThemeController>();

    return MaterialApp(
      title: 'Flutter Design Patterns',
      themeMode: themeController.mode,
      theme: ThemeData.light(useMaterial3: true),
      darkTheme: ThemeData.dark(useMaterial3: true),
      onGenerateRoute: AppRoutes.generate,
      initialRoute: AppRoutes.home,
    );
  }
}

class MyHomePage extends StatelessWidget {

  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter Design Patterns'),
        actions: const [ThemeToggle()],
      ),
      body: ListView(
        children: [
          _NavItem(
            title: 'Container / Presentational',
            route: AppRoutes.container
          ),
        ]
      ),
    );
  }

}

class _NavItem extends StatelessWidget {
  final String title;
  final String route;

  const _NavItem({required this.title, required this.route});

  @override
  Widget build(BuildContext context){
    return ListTile(
      title: Text(title),
      trailing: const Icon(Icons.arrow_forward),
      onTap: () => Navigator.pushNamed(context, route),
    );
  }
}

class SectionTitle extends StatelessWidget {

  final String text;

  const SectionTitle(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Text(
        text,
        style: Theme.of(context).textTheme.titleLarge,
      ),
    );
  }
}