class ProductDto {
  List<Product> products;

  ProductDto({required this.products});

  factory ProductDto.fromJson(Map<String, dynamic> json) {
    return ProductDto(
      products: (json['products'] as List)
          .map((i) => Product.fromJson(i))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'products': products.map((i) => i.toJson()).toList(),
    };
  }
}

class Product {
  String title;
  String duration;
  double price;
  double discountPrice;
  String description;
  String server;
  Location location;
  String stripePriceId;
  List<String> features;

  Product({
    required this.title,
    required this.duration,
    required this.price,
    required this.discountPrice,
    required this.description,
    required this.server,
    required this.location,
    required this.stripePriceId,
    required this.features,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      title: json['title'],
      duration: json['duration'],
      price: (json['price'] as num).toDouble(),
      discountPrice: (json['discountPrice'] as num).toDouble(),
      description: json['description'],
      server: json['server'],
      location: Location.fromJson(json['location']),
      stripePriceId: json['stripePriceId'],
      features: List<String>.from(json['features']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'duration': duration,
      'price': price,
      'discountPrice': discountPrice,
      'description': description,
      'server': server,
      'location': location.toJson(),
      'stripePriceId': stripePriceId,
      'features': features,
    };
  }
}

class Location {
  String country;
  String countryCode;
  String city;
  String datacenter;

  Location({
    required this.country,
    required this.countryCode,
    required this.city,
    required this.datacenter,
  });

  factory Location.fromJson(Map<String, dynamic> json) {
    return Location(
      country: json['country'],
      countryCode: json['countryCode'],
      city: json['city'],
      datacenter: json['datacenter'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'country': country,
      'countryCode': countryCode,
      'city': city,
      'datacenter': datacenter,
    };
  }
}
