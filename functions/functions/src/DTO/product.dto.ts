export interface ProductDto {
  products: Product[]
}

export interface Product {
  title: string
  price: number
  discountPrice: number
  description: string
  server: string
  location:{
    country: string
    countryCode: string
    city: string
    datacenter: string
    datacenterProvider: string
  },
  stripePriceId: string
  features: string[]
}
