import 'package:country_flags/country_flags.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/models/product.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class ProductCard extends StatelessWidget {
  final Product product;
  final AsyncCallback selected;

  ProductCard({super.key, required this.product, required this.selected});

  var isLoading = false.obs;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () async {
        if (isLoading.value) {
          return;
        }
        isLoading.value = true;
        await selected();
        isLoading.value = false;
      },
      child: Container(
          margin: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
              color: Colors.transparent,
              border: Border.all(color: Colors.greenAccent),
              borderRadius: BorderRadius.circular(15)),
          child: ListTile(
              //flag
              leading: Container(
                padding: const EdgeInsets.all(.5),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.black12),
                    borderRadius: BorderRadius.circular(5)),
                child: CountryFlag.fromCountryCode(
                  product.location.countryCode.toLowerCase(),
                  height: 35,
                  width: Get.width * .12,
                  shape: RoundedRectangle(10),
                ),
              ),
              title: Text(
                '${product.location.city}, ${product.location.country}',
                style: const TextStyle(fontSize: 18),
              ),
              subtitle:
                  Text('${product.discountPrice} € per ${product.duration}'),
              trailing: CircleAvatar(
                minRadius: 5,
                maxRadius: 15,
                backgroundColor: Colors.white,
                child: Obx(() => isLoading.value
                    ? CircularProgressIndicator(color: Constants.primaryColor)
                    : Icon(Icons.shopping_basket,
                        color: Constants.primaryColor, size: 26)),
              ))),
    );
  }
}
