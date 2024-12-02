export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type WorkType = {
  icon?: string
  image?: string
  title: string
  description?: string
}

export type UseCaseType = {
  icon: string
  image: string
  title: string
  description: string
  imageWidth: number
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  rating?: number
  comment: string
  user: UserType
}

export type WorkToolType = {
  icon?: string
  image?: string
  name?: string
}

export type PricingFeatureType = {
  id: number
  info: string
}

export type PricingType = {
  planName: string
  icon: string
  monthlyPrice: number
  yearlyPrice: number
  availableFeatures: PricingFeatureType['id'][]
  status?: string
}
