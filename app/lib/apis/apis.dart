import 'dart:convert';
import 'dart:developer';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:dedicated_ip/models/stripe_model.dart';

import '../helpers/my_dialogs.dart';
import '../helpers/pref.dart';
import '../models/ip_details.dart';

class APIs {
  static Future<void> getStripeData() async {
    try {
      FirebaseFirestore.instance
          .collection('Stripe')
          .get()
          .then((QuerySnapshot querySnapshot) {
        querySnapshot.docs.forEach((doc) {
          var stripe = doc["stripeDetail"] as Map<String, dynamic>;
          StripeModel stripeModel = StripeModel.fromJson(stripe);
          Pref.stripeModel = stripeModel;
        });
      });
    } catch (e) {
      MyDialogs.error(msg: e.toString());
      log('\Firebase Stripe Error: $e');
    }
  }

  static Future<void> getIPDetails({required Rx<IPDetails> ipData}) async {
    try {
      final res = await http.get(Uri.parse('http://ip-api.com/json/'));
      final data = jsonDecode(res.body);
      log(data.toString());
      ipData.value = IPDetails.fromJson(data);
    } catch (e) {
      MyDialogs.error(msg: e.toString());
      log('\ngetIPDetailsE: $e');
    }
  }
}
