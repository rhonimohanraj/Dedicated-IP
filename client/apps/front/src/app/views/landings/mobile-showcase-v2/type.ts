export type CryptoCurrencyType = {
  image: string
  name: string
  symbol: string
  price: string
  price_change: string
  market_cap: string
  graph: string
}

export type FeatureType = {
  id?: string
  icon?: string
  image?: string
  title: string
  description: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  rating: number
  comment: string
  user: UserType
}

export type ServiceType = {
  image: string
  title: string
  description: string
  name: string
  text: string
}
