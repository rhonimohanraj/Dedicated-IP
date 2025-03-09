import {getRemoteConfigValue} from "../config/remote.config";
import {Product, ProductDto} from "../dto/product.dto";

export async function getProduct(productId: string): Promise<Product> {
  const products = JSON.parse(
    await getRemoteConfigValue("Products")
  ) as ProductDto;

  const filteredProducts = products.products.filter(
    (product) => product.id === productId
  );

  if (filteredProducts.length === 0) {
    throw new Error("Product not found.");
  }

  const product = filteredProducts[0];

  return product as Product;
}
