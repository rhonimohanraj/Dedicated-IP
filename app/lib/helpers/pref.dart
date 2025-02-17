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

  //for storing single selected vpn details
  static Vpn get vpn => Vpn.fromJson(jsonDecode(_box.get('vpn') ?? '{}'));
  static set vpn(Vpn v) => _box.put('vpn', jsonEncode(v));

  //for storing single selected user details
  static User get user => User.fromJson(jsonDecode(_box.get('user') ?? '{}'));
  static set user(User v) => _box.put('user', jsonEncode(v));
}
