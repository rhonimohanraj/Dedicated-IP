export type FeatureType = {
  src: string
}

export type workType = {
  src: string
  id: string
}
export type FeaturesContent = {
  icon_src: string
  title: string
  description: string
}

export type testimonialType = {
  name: string
  position: string
  avatar: string
  rating: number
  comment: string
}

export type MobileShowFaqType = {
  question: string
}

export const FeatureLogos: FeatureType[] = [
  {
    src: 'assets/img/brands/01.svg',
  },
  {
    src: 'assets/img/brands/02.svg',
  },
  {
    src: 'assets/img/brands/03.svg',
  },
  {
    src: 'assets/img/brands/04.svg',
  },
  {
    src: 'assets/img/brands/05.svg',
  },
  {
    src: 'assets/img/brands/06.svg',
  },
]

export const featuresContent: FeaturesContent[] = [
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/payments.svg',
    title: 'Easy Payments',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/security.svg',
    title: 'Data Security',
    description:
      'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/statistics.svg',
    title: 'Cost Statistics',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/support.svg',
    title: 'Support 24/7',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/cashback.svg',
    title: 'Regular Cashback',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    icon_src: 'assets/img/landing/app-showcase-1/features/happy.svg',
    title: 'Top Standards',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
]

export const workData: workType[] = [
  {
    id: '#text-1',
    src: 'assets/img/landing/app-showcase-1/screens/01.png',
  },
  { id: '#text-2', src: 'assets/img/landing/app-showcase-1/screens/02.png' },
  { id: '#text-3', src: 'assets/img/landing/app-showcase-1/screens/03.png' },
  { id: '#text-4', src: 'assets/img/landing/app-showcase-1/screens/04.png' },
]

export const mobileShowcaseTestimonial: testimonialType[] = [
  {
    name: 'Fannie Summers',
    position: 'Designer',
    avatar: 'assets/img/avatar/42.png',
    rating: 3,
    comment:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
  },
  {
    name: 'Robert Fox',
    position: 'QA Engineer',
    avatar: 'assets/img/avatar/43.png',
    rating: 5,
    comment:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
  },
  {
    name: 'Annette Black',
    position: 'Project Manager',
    avatar: 'assets/img/avatar/44.png',
    rating: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
  },
  {
    name: 'Jerome Bell',
    position: 'Developer',
    avatar: 'assets/img/avatar/45.png',
    rating: 5,
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
  },
]

export const mobileShowCaseFaqs: MobileShowFaqType[] = [
  {
    question: 'Is any of my personal information stored in the App?',
  },
  {
    question: 'What formats can I download my transaction history in?',
  },
  {
    question: 'Can I schedule future transfers?',
  },
  {
    question: 'When can I use Banking App services?',
  },
  {
    question: 'Can I create my own password that is easy for me to remember?',
  },
]
