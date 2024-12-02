export type BrandType = {
  image: string
  icon?: string
  name?: string
  about?: string
}
export type WorkFlowType = {
  title: string
  description: string
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
