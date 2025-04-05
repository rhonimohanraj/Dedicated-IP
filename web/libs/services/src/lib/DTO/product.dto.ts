export interface ProductDto {
  products: Product[]
}

export interface Product {
  id: string
  title: string
  duration: string;
  price: number
  discountPrice: number
  description: string
  server: number
  location:{
    country: string
    countryCode: string
    city: string
    datacenter: string
  },
  id: string
  features: string[]
}
