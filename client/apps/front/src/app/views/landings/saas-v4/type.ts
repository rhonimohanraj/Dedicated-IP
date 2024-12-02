export type appType = {
  icon: string
  title: string
  discription: string
  image: string
}

export type IndustryType = {
  id: string
  image: string
  name: string
  about: string
}

export type ToolsType = {
  lightimage: string
  darkimage: string
}

export type UserType = {
  image?: string
  name: string
}

export type BlogType = {
  category?: string
  time: string
  url?: string
  user: UserType
  title: string
  description: string
  liked: number
  commented: number
  shared: number
}

export type PriceType = {
  id: number
  title: string
  subtitle: string
  monthlyamount: string
  annualamount: string
  status?: string
}
