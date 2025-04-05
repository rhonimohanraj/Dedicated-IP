export interface ProductDto {
  products: Product[]
}

export interface Product {
  id: string
  title: string
  price: number
  discountPrice: number
  description: string
  duration: string
  server: string
  location:{
    country: string
    countryCode: string
    city: string
    datacenter: string
    datacenterProvider: string
  },
  features: string[]
}
