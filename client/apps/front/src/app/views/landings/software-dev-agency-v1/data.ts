import { currentYear } from '@states/constants'

const csm = 'assets/img/services/icons/cms.svg'
const rocket = 'assets/img/services/icons/rocket.svg'
const mobileApp = 'assets/img/services/icons/mobile-app.svg'
const analytics = 'assets/img/services/icons/analytics.svg'
const webSearch = 'assets/img/services/icons/web-search.svg'
const timer = 'assets/img/services/icons/timer.svg'

const feature1 = 'assets/img/landing/software-agency-1/features/01.svg'
const feature2 = 'assets/img/landing/software-agency-1/features/02.svg'
const feature3 = 'assets/img/landing/software-agency-1/features/03.svg'
const feature4 = 'assets/img/landing/software-agency-1/features/04.svg'

const avatar5 = 'assets/img/avatar/05.jpg'
const avatar6 = 'assets/img/avatar/06.jpg'
const avatar1 = 'assets/img/avatar/01.jpg'

const brand1SvgImg = 'assets/img/brands/01.svg'
const brand2SvgImg = 'assets/img/brands/02.svg'
const brand3SvgImg = 'assets/img/brands/03.svg'
const brand4SvgImg = 'assets/img/brands/04.svg'
const brand5SvgImg = 'assets/img/brands/05.svg'
const brand6SvgImg = 'assets/img/brands/06.svg'

export type ServiceType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description?: string
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

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type NewsType = {
  category: string
  time: string
  url?: string
  title: string
  description: string
  liked: number
  commented: number
  shared: number
}

export type HeroType = {
  title: string
  description: string
  btnLabel: string
}

export const herosliderData: HeroType[] = [
  {
    title: 'The Best IT Solutions for Your Business',
    description:
      'We provide the wide range of high quality IT services and best practices solutions to our customers making their business better.',
    btnLabel: 'Start your project',
  },
  {
    title: 'Award-Winning Software Development',
    description:
      'We build complex web, desktop and mobile applications. With us you get quality software and perfect service every time.',
    btnLabel: 'View case studies',
  },
  {
    title: '24/7 Tech & Business Support',
    description:
      "We ensure lifetime support of all applications we've built. Our support department is a team of professionals who will assist you 24/7.",
    btnLabel: 'Work with us',
  },
]

export const serviceData: ServiceType[] = [
  {
    image: csm,
    title: 'Custom Software Development',
    description:
      'Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.',
  },
  {
    image: rocket,
    title: 'Software Integration',
    description: `Id eget blandit sapien cras massa lectus lorem placerat. dolorcommodo fermentum bibendum dictumst. Risus pretium eget at eget. Sit neque adipiscing malesuadablandit justo, quam.`,
  },
  {
    image: mobileApp,
    title: 'Mobile App Development',
    description: `Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendreritat egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci,dictum nunc mus quis semper eu bibendum enim, morbi.`,
  },
  {
    image: analytics,
    title: 'Business Analytics',
    description:
      'Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.',
  },
  {
    image: webSearch,
    title: 'Software Testing',
    description:
      'Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.',
  },
  {
    image: timer,
    title: 'Project Management',
    description:
      'Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.',
  },
]

export const featureData: FeatureType[] = [
  {
    image: feature1,
    title: 'Build a functional prototype in 24 hrs',
  },
  {
    image: feature2,
    title: 'Create an MVP within two weeks',
  },
  {
    image: feature3,
    title: 'Kickstart software development',
  },
  {
    image: feature4,
    title: 'Get 24/7 tech & business support',
  },
]

const userData: UserType[] = [
  {
    image: avatar5,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Company',
  },
  {
    image: avatar6,
    name: 'Annette Black',
    role: 'Strategic Advisor at Ipsum Ltd',
  },
  {
    image: avatar1,
    name: 'Darrell Steward',
    role: 'Project Manager at Company Ltd',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[0],
  },
  {
    comment: `Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.`,
    user: userData[1],
  },
  {
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[2],
  },
]

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg,
  },
  {
    image: brand2SvgImg,
  },
  {
    image: brand3SvgImg,
  },
  {
    image: brand4SvgImg,
  },
  {
    image: brand5SvgImg,
  },
  {
    image: brand6SvgImg,
  },
]

const categories: string[] = [
  'Tech',
  'Strategy',
  'Software',
  'Startups',
  'Technology',
]
export const newsData: NewsType[] = [
  {
    category: categories[0],
    time: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    liked: 2,
    commented: 0,
    shared: 3,
  },
  {
    category: categories[1],
    time: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    liked: 8,
    commented: 4,
    shared: 2,
  },
  {
    category: categories[2],
    time: 'May 24,' + currentYear,
    title: 'What the Software Stock Slump Means for the Market',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    liked: 6,
    commented: 1,
    shared: 5,
  },
  {
    category: categories[3],
    time: 'Sep 3,' + currentYear,
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'otam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.',
    liked: 8,
    commented: 7,
    shared: 3,
  },
  {
    category: categories[5],
    time: 'Aug 19,' + currentYear,
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    liked: 5,
    commented: 3,
    shared: 9,
  },
]
