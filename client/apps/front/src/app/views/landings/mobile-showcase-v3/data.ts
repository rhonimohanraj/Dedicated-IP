import { currentYear } from '@states/constants'
import type {
  FeatureType,
  PurchaseType,
  StatisticType,
  TestimonialType,
  UserType,
} from './type'

const paymentImg = 'assets/img/landing/app-showcase-3/features/payment.svg'
const securityImg = 'assets/img/landing/app-showcase-3/features/security.svg'
const statisticsImg =
  'assets/img/landing/app-showcase-3/features/statistics.svg'
const supportImg = 'assets/img/landing/app-showcase-3/features/support.svg'
const avatar51Img = 'assets/img/avatar/51.jpg'
const avatar52Img = 'assets/img/avatar/52.jpg'
const avatar53Img = 'assets/img/avatar/53.jpg'
const payment3Img = 'assets/img/landing/app-showcase-3/features/payment.svg'
const usersImg = 'assets/img/landing/app-showcase-3/features/users.svg'
const statistics3Img =
  'assets/img/landing/app-showcase-3/features/statistics.svg'
const cashbackImg = 'assets/img/landing/app-showcase-3/features/cashback.svg'

export const featureData: FeatureType[] = [
  {
    image: paymentImg,
    title: 'Easy payments',
    description:
      'Users can easily make payments through the mobile app using various payment methods.',
  },
  {
    image: securityImg,
    title: 'Data security',
    description:
      'The app employs various security measures to protect user data from unauthorized access or theft.',
  },
  {
    image: statisticsImg,
    title: 'Cost statistics',
    description:
      'Users can track their spending and view detailed cost statistics, such as expenses by category, time period...',
  },
  {
    image: supportImg,
    title: 'Support 24/7',
    description: `Users can get help or support from the app\'s customer service team at any time of day or night.`,
  },
]

export const statData: StatisticType[] = [
  {
    image: payment3Img,
    number: 355,
    postfix: 'billions',
    title: 'Money spent',
  },
  {
    image: usersImg,
    number: 3.4,
    postfix: 'billions',
    title: 'Application users',
  },
  {
    image: statistics3Img,
    number: 1.2,
    postfix: 'billions',
    title: 'Transactions a month',
  },
  {
    image: cashbackImg,
    number: 1.7,
    postfix: 'billions',
    title: 'Accrued cashback',
  },
]

export const userData: UserType[] = [
  {
    image: avatar51Img,
    name: 'Jenny Wilson',
    role: 'Designer',
  },
  {
    image: avatar52Img,
    name: 'Wade Warren',
    role: 'QA Engineer',
  },
  {
    image: avatar53Img,
    name: 'Ralph Edwards',
    role: 'Project Manager',
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
]

export const purchaseData: PurchaseType[] = [
  {
    id: 1,
    text: 'Apple design',
    content: 'Award winner',
    year: currentYear,
  },
  {
    id: 2,
    text: 'Google Play',
    content: `Editor's choice`,
    year: currentYear,
  },
  {
    id: 3,
    text: 'App Store',
    content: 'App of the week',
    year: currentYear,
  },
]
