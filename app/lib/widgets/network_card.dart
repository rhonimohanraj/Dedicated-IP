import 'package:flutter/material.dart';

import '../models/network_data.dart';

class NetworkCard extends StatelessWidget {
  final NetworkData data;

  const NetworkCard({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
            color: Colors.transparent,
            border: Border.all(color: Colors.greenAccent),
            borderRadius: BorderRadius.circular(15)),
        child: ListTile(
          minLeadingWidth: 20,
          //flag
          leading: Icon(data.icon.icon,
              color: data.icon.color, size: data.icon.size ?? 28),

          //title
          title: Text(data.title),

          //subtitle
          subtitle: Text(data.subtitle),
        ));
  }
}
