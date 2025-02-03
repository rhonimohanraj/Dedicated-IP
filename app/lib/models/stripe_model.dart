class StripeModel {
  final String secretKey;
  final String publishableKey;
  final String priceKey;
  final int days;
  final int price;

  StripeModel({
    required this.secretKey,
    required this.publishableKey,
    required this.priceKey,
    required this.days,
    required this.price,
  });

  factory StripeModel.fromJson(Map<String, dynamic> json) {
    return StripeModel(
      secretKey: json['secretKey'] ?? '',
      publishableKey: json['publishableKey'] ?? '',
      priceKey: json['priceKey'] ?? '',
      days: json['days'] ?? 0,
      price: json['price'] ?? 0,
    );
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['secretKey'] = secretKey;
    data['publishableKey'] = publishableKey;
    data['priceKey'] = priceKey;
    data['days'] = days;
    data['price'] = price;

    return data;
  }
}
