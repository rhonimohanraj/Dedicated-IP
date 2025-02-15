import 'dart:convert';

import 'package:dedicated_ip/models/user.dart';
import 'package:hive_flutter/hive_flutter.dart';

import '../models/stripe_model.dart';
import '../models/vpn.dart';

class Pref {
  static late Box _box;

  static Future<void> initializeHive() async {
    await Hive.initFlutter();
    _box = await Hive.openBox('data');
  }

  //for storing theme data
  static bool get isDarkMode => _box.get('isDarkMode') ?? false;
  static set isDarkMode(bool v) => _box.put('isDarkMode', v);

  //for storing premium data
  static bool get isPremium => _box.get('isPremium') ?? false;
  static set isPremium(bool v) => _box.put('isPremium', v);

  //for storing premium data
  static String get expiryDate =>
      _box.get('expiryDate') ?? DateTime.now().toString();
  static set expiryDate(String v) => _box.put('expiryDate', v);

  //for storing single selected vpn details
  static Vpn get vpn => Vpn.fromJson(jsonDecode(_box.get('vpn') ?? '{}'));
  static set vpn(Vpn v) => _box.put('vpn', jsonEncode(v));

  //for storing single selected user details
  static User get user => User.fromJson(jsonDecode(_box.get('user') ?? '{}'));
  static set user(User v) => _box.put('user', jsonEncode(v));

  //for storing single selected vpn details
  static StripeModel get stripeModel =>
      StripeModel.fromJson(jsonDecode(_box.get('stripe') ?? '{}'));
  static set stripeModel(StripeModel v) => _box.put('stripe', jsonEncode(v));

  //for storing vpn servers details
  static List<Vpn> get vpnList {
    List<Vpn> temp = [];
    final data = jsonDecode(_box.get('vpnList') ?? '[]');

    for (var i in data) temp.add(Vpn.fromJson(i));

    return temp;
  }

  static set vpnList(List<Vpn> v) => _box.put('vpnList', jsonEncode(v));
}
