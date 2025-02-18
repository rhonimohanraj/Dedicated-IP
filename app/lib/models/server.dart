import 'package:equatable/equatable.dart';

class Server extends Equatable {
  const Server({
    required this.id,
    required this.countryCode,
    required this.datacenterProvider,
    required this.datacenter,
    required this.location,
    required this.name,
    required this.password,
    required this.server,
    required this.status,
    required this.subscription,
    required this.username,
  });

  final String id;

  final String countryCode;

  final String datacenterProvider;

  final String datacenter;

  final String location;

  final String name;

  final String password;

  final String server;

  final String status;

  final String subscription;

  final String username;

  @override
  List<Object?> get props => [
        id,
        countryCode,
        datacenterProvider,
        datacenter,
        location,
        name,
        password,
        server,
        status,
        subscription,
        username
      ];

  static Server fromJson(Map<String, dynamic> json, String? uid) {
    return Server(
      id: uid ?? json['id'] ?? '',
      countryCode: json['countryCode'] ?? '',
      datacenterProvider: json['datacenterProvider'] ?? '',
      datacenter: json['datacenter'] ?? '',
      location: json['location'] ?? '',
      name: json['name'] ?? '',
      password: json['password'] ?? '',
      server: json['server'] ?? '',
      status: json['status'] ?? '',
      subscription: json['subscription'] ?? '',
      username: json['username'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['uid'] = id;
    data['countryCode'] = countryCode;
    data['datacenterProvider'] = datacenterProvider;
    data['datacenter'] = datacenter;
    data['location'] = location;
    data['name'] = name;
    data['password'] = password;
    data['server'] = server;
    data['status'] = status;
    data['subscription'] = subscription;
    data['username'] = username;
    return data;
  }

  bool isEmpty() {
    if (id.isEmpty) return true;
    return false;
  }
}
