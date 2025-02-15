import 'package:equatable/equatable.dart';

/// {@template user}
/// User model
///
/// [User.empty] represents an unauthenticated user.
/// {@endtemplate}
class User extends Equatable {
  const User({
    required this.id,
    this.email,
    this.name,
    this.photo,
  });

  final String? email;

  final String id;

  final String? name;

  final String? photo;

  static const empty = User(id: '');

  @override
  List<Object?> get props => [email, id, name, photo];

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] ?? '',
      email: json['email'] ?? '',
      name: json['name'] ?? '',
      photo: json['photo'] ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{};
    data['id'] = id;
    data['email'] = email;
    data['name'] = name;
    data['photo'] = photo;

    return data;
  }

  bool isEmpty() {
    if (id.isEmpty) return true;
    return false;
  }
}
