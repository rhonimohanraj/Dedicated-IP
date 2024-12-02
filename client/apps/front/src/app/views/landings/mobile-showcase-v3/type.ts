export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type StatisticType = {
  image: string
  title: string
  number: number
  prefix?: string
  postfix?: string
}

export type UserType = {
  image?: string
  name: string
  role?: string
}

export type TestimonialType = {
  rating: number
  comment: string
  user: UserType
}

export interface PurchaseType {
  id: number
  text: string
  content: string
  year: number
}
