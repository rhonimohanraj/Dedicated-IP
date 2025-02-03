class Vpn {
  final String id;
  final String hostname;
  final String port;
  final String ip;
  final String countryLong;
  final String countryShort;
  final String configDataBase64;
  final bool? active;
  final bool? premium;
  final String city;

  Vpn({
    required this.id,
    required this.hostname,
    required this.port,
    required this.ip,
    required this.countryLong,
    required this.countryShort,
    required this.configDataBase64,
    required this.active,
    required this.premium,
    required this.city,
  });

  factory Vpn.fromJson(Map<String, dynamic> json) {
    return Vpn(
      id: json['id'] ?? '',
      hostname: json['hostname'] ?? '',
      port: json['port'] ?? '',
      ip: json['ip'] ?? '',
      countryLong: json['countryLong'] ?? '',
      countryShort: json['countryShort'] ?? '',
      configDataBase64: json['configDataBase64'] ?? '',
      active: json['active'] == null ? null : json['active'] as bool,
      premium: json['premium'] == null ? null : json['premium'] as bool,
      city: json['city'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['id'] = id;
    data['hostname'] = hostname;
    data['port'] = port;
    data['ip'] = ip;
    data['countryLong'] = countryLong;
    data['countryShort'] = countryShort;
    data['configDataBase64'] = configDataBase64;
    data['active'] = active;
    data['premium'] = premium;
    data['city'] = city;
    return data;
  }
}
