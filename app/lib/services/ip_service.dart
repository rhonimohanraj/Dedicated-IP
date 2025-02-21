import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;

class IpService extends GetxController {
  Future<String> getIp(String hostname) async {
    final response = await http.get(Uri.parse('https://dns.google/resolve?name=$hostname&type=A'));

    if (response.statusCode == 200) {
      try {
        final data = jsonDecode(response.body);
        if ((data['Answer']?.length ?? 0) > 0) {
          return (data['Answer'].first['data'] ?? '');
        }
        return '';
      } catch (e) {
        return '';
      }
    } else {
      return '';
    }
  }
}
