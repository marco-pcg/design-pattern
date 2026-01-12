import 'dart:convert';

import 'package:app/DogImagesView.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class DogImagesContainer extends StatefulWidget {

  const DogImagesContainer({ super.key });

  @override
  State<DogImagesContainer> createState() => _DogImagesContainerState();

}

class _DogImagesContainerState extends State<DogImagesContainer> {

  List<String> dogs = [];

  @override
  void initState() {
    super.initState();
    fetchDogs();
  }

  Future<void> fetchDogs() async {
    final response = await http.get(Uri.parse(
      "https://dog.ceo/api/breed/labrador/images/random/6"
    ));

    setState(() {
      dogs = [];
    });
  }

  @override
  Widget build(BuildContext context) {
    return DogImagesview(dogs: dogs);
  }

}