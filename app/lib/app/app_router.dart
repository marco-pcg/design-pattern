

import 'package:app/features/container_presentational/container_page.dart';
import 'package:app/main.dart';
import 'package:flutter/material.dart';

class AppRoutes {

  static const home = '/';
  static const container = '/container';

  static Route<dynamic> generate(RouteSettings settings) {
    switch (settings.name) {
      case container:
        return MaterialPageRoute(builder: (_) => const ContainerPage());

      default:
        return MaterialPageRoute(builder: (_) => const MyHomePage());
    }
  }

}