
import 'package:flutter/material.dart';

class DogImagesview  extends StatelessWidget {

  final List<String> dogs;

  const DogImagesview({super.key, required this.dogs});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      itemCount: dogs.length,
      gridDelegate:
        const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      itemBuilder: (_, index) {
        return Image.network(dogs[index]);
      },
    );
  }

}