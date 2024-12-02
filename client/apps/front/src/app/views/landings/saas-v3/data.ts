const brand1Img = 'assets/img/brands/01.svg'
const brand2Img = 'assets/img/brands/02.svg'
const brand3Img = 'assets/img/brands/03.svg'
const brand4Img = 'assets/img/brands/04.svg'
const brand5Img = 'assets/img/brands/05.svg'
const brand6Img = 'assets/img/brands/06.svg'

const avatar40Img = 'assets/img/avatar/40.jpg'
const avatar6Img = 'assets/img/avatar/06.jpg'
const avatar41Img = 'assets/img/avatar/41.jpg'
const avatar5Img = 'assets/img/avatar/05.jpg'

import type { BrandType, WorkFlowType, TestimonialType, UserType } from './type'

export const brandData: BrandType[] = [
  {
    image: brand1Img,
  },
  {
    image: brand2Img,
  },
  {
    image: brand3Img,
  },
  {
    image: brand4Img,
  },
  {
    image: brand5Img,
  },
  {
    image: brand6Img,
  },
]

export const workFlowData: WorkFlowType[] = [
  {
    title: 'Registration',
    description: 'Massa enim libero dictumst consectetur in convallis lobortis',
  },
  {
    title: 'Identity verification',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim',
  },
  {
    title: 'Start trading',
    description: 'Pellentesque rhoncus viverra vestibulum, purus purus',
  },
  {
    title: 'Earn with Silicon',
    description: 'Massa enim libero dictumst consectetur in convallis lobortis',
  },
]

export const userData: UserType[] = [
  {
    image: avatar40Img,
    name: 'Jenny Wilson',
    role: 'Founder of Lorem Company',
  },
  {
    image: avatar6Img,
    name: 'Wade Warren',
    role: 'CEO of Ipsum Company',
  },
  {
    image: avatar41Img,
    name: 'Ralph Edwards',
    role: 'Founder of the Agency',
  },
  {
    image: avatar5Img,
    name: 'Ralph Edwards',
    role: 'CEO of Dolor Ltd.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      "This app has completely transformed the way I approach my finances. It's packed with useful features and it's helped me stay on top of my finances and reach my financial goals.",
    rating: 5,
    user: userData[0],
  },
  {
    comment: `I absolutely love using this app! It's user-friendly interface makes it incredibly easy to track my spending and budget accordingly. I highly recommend it to anyone looking to improve their financial management skills.`,
    rating: 4,
    user: userData[1],
  },
  {
    comment: `I've tried many different apps, but this one stands out as the best. Its intuitive interface, helpful tools, and insightful reports have made it an essential tool for managing my money.`,
    rating: 5,
    user: userData[2],
  },
  {
    comment:
      "This app has completely transformed the way I approach my finances. It's packed with useful features and it's helped me stay on top of my finances and reach my financial goals.",
    rating: 4,
    user: userData[3],
  },
]
