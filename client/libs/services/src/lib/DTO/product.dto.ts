export interface ProductDto {
  Products: Product[]
}

export interface Product {
  title: string
  price: number
  discount_price: number
  description: string
  server: number
  country: string
  country_code: string
  city: string
  datacenter: string
  stripe_price_id: string
  features: string[]
}
