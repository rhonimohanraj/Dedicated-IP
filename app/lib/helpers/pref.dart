import 'dart:convert';

import 'package:dedicated_ip/models/server.dart';
import 'package:dedicated_ip/models/user.dart';
import 'package:hive_flutter/hive_flutter.dart';

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

  static User get user => User.fromJson(jsonDecode(_box.get('user') ?? '{}'));
  static set user(User v) => _box.put('user', jsonEncode(v));

  static Server get server => Server.fromJson(jsonDecode(_box.get('server') ?? '{}'), _box.get('server_id') ?? '');
  static set server(Server v) => {
    _box.put('server', jsonEncode(v)),
    _box.put('server_id', v.id)
  };

  static List<Server> get servers {
    List<Server> servers = [];
    var cachedData = jsonDecode(_box.get('servers') ?? "[]");
    for (var element in cachedData) {
      servers.add(Server.fromJson(element, ''));
    }
    return servers;
  }
  static set servers(List<Server> v) => _box.put('servers', jsonEncode(v));
}
