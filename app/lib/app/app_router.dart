import 'package:app/features/hoc_wrapper/hoc_wrapper_page.dart';
import 'package:app/main.dart';
import 'package:flutter/material.dart';

class AppRoutes {

  static const home = '/';
  static const hoc = '/hoc';

  static Route<dynamic> generate(RouteSettings settings) {
    switch (settings.name) {
      case hoc:
        return MaterialPageRoute(builder: (_) => const HocWrapperPage());

      default:
        return MaterialPageRoute(builder: (_) => const MyHomePage());
    }
  }

}