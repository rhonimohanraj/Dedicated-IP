import type {
  CryptoCurrencyType,
  FeatureType,
  ServiceType,
  TestimonialType,
  UserType,
} from './type'

const paymentImg = 'assets/img/landing/app-showcase-2/features/payments.svg'
const cashBackImg = 'assets/img/landing/app-showcase-2/features/cashback.svg'
const statisticsImg =
  'assets/img/landing/app-showcase-2/features/statistics.svg'
const securityImg = 'assets/img/landing/app-showcase-2/features/security.svg'
const screen1Img = 'assets/img/landing/app-showcase-2/screens/01.png'
const screen2Img = 'assets/img/landing/app-showcase-2/screens/02.png'
const screen3Img = 'assets/img/landing/app-showcase-2/screens/03.png'
const chatImg = 'assets/img/landing/app-showcase-2/icons/chat.svg'
const faqsImg = 'assets/img/landing/app-showcase-2/icons/faq.svg'
const emailImg = 'assets/img/landing/app-showcase-2/icons/email.svg'

export const cryptocurrencies: CryptoCurrencyType[] = [
  {
    image: 'assets/img/landing/app-showcase-2/crypto/btc.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '38,940.63',
    price_change: '+1.70%',
    market_cap: '736,124,602,670.97',
    graph: 'assets/img/landing/app-showcase-2/crypto/graphs/btc.svg',
  },
  {
    image: 'assets/img/landing/app-showcase-2/crypto/usdt.png',
    name: 'Tether',
    symbol: 'USDT',
    price: '15.09',
    price_change: '-0.27%',
    market_cap: '14,735,584,883.68',
    graph: 'assets/img/landing/app-showcase-2/crypto/graphs/usdt.svg',
  },
  {
    image: 'assets/img/landing/app-showcase-2/crypto/eth.png',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '2,829.07',
    price_change: '+1.27%',
    market_cap: '337,863,906,048.53',
    graph: 'assets/img/landing/app-showcase-2/crypto/graphs/eth.svg',
  },
  {
    image: 'assets/img/landing/app-showcase-2/crypto/dot.png',
    name: 'Polkadot',
    symbol: 'DOT',
    price: '13.28',
    price_change: '-1.35%',
    market_cap: '26,143,724,006.81',
    graph: 'assets/img/landing/app-showcase-2/crypto/graphs/dot.svg',
  },
]

export const featureData: FeatureType[] = [
  {
    image: paymentImg,
    title: 'Top Up Account Easily',
    description:
      'Mollis consectetur congue egestas egestas suspendisse blandit proin volutpat mollis egestas in ultrices.',
  },
  {
    image: cashBackImg,
    title: 'Regular Cashback',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo lorem ipsum dolor sit amet, consectetur elit.',
  },
  {
    image: statisticsImg,
    title: 'Cost Statistics',
    description:
      'Congue fames odio tincidunt mus. Eleifend in at arcu id sit scelerisque in. Elit quis sem dictum non turpis eget.',
  },
  {
    image: securityImg,
    title: 'Data Security',
    description:
      'Vulputate commodo tincidunt risus ac odio cursus morbi ipsum ut in laoreet fermentum condimentum.',
  },
]

export const processData: FeatureType[] = [
  {
    id: 'screen-1',
    image: screen1Img,
    title: 'Create your account',
    description:
      'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.',
  },
  {
    id: 'screen-2',
    image: screen2Img,
    title: 'Set up payment details',
    description:
      'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.',
  },
  {
    id: 'screen-3',
    image: screen3Img,
    title: 'Start trading',
    description:
      'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.',
  },
]

export const userData: UserType[] = [
  {
    name: 'Fannie Summers',
    role: 'Founder of Lorem Company',
  },
  {
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company',
  },
  {
    name: 'Annette Black',
    role: 'Founder of the Agency',
  },
  {
    name: 'Jerome Bell',
    role: 'CEO of Dolor Ltd.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
    rating: 3,
    user: userData[0],
  },
  {
    comment:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
    rating: 5,
    user: userData[1],
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
    rating: 4,
    user: userData[2],
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
    rating: 5,
    user: userData[3],
  },
]

export const serviceData: ServiceType[] = [
  {
    image: chatImg,
    title: '24/7 Chat Help',
    description: 'Chat support with our customer service specialists.',
    name: 'landings.mobile-app-2',
    text: 'Talk to us',
  },
  {
    image: faqsImg,
    title: 'FAQ',
    description: 'Find answers. Learn more about the features and services.',
    name: 'landings.mobile-app-2',
    text: 'Learn more',
  },
  {
    image: emailImg,
    title: 'Email',
    description: 'Please feel free to drop any questions to our email.',
    name: 'landings.mobile-app-2',
    text: 'Drop us a line',
  },
]
