// import RocketIcon from '@iconify/icons-bx/bx-rocket'
// import LikeIcon from '@iconify/icons-bx/bx-like'
// import TimeFiceIcon from '@iconify/icons-bx/bx-time-five'
// import GropuIcon from '@iconify/icons-bx/bx-group'

import { currentYear } from '@states/constants'

const industry1 = 'assets/img/landing/financial/industries/01.jpg'
const industry2 = 'assets/img/landing/financial/industries/02.jpg'
const industry3 = 'assets/img/landing/financial/industries/03.jpg'

const brand1SvgImg = 'assets/img/brands/01.svg'
const brand2SvgImg = 'assets/img/brands/02.svg'
const brand3SvgImg = 'assets/img/brands/03.svg'
const brand4SvgImg = 'assets/img/brands/04.svg'
const brand5SvgImg = 'assets/img/brands/05.svg'
const brand6SvgImg = 'assets/img/brands/06.svg'

const news1Img = 'assets/img/landing/financial/news/01.jpg'
const news2Img = 'assets/img/landing/financial/news/02.jpg'
const news3Img = 'assets/img/landing/financial/news/03.jpg'
const news4Img = 'assets/img/landing/financial/news/04.jpg'

const avatar2Img = 'assets/img/avatar/02.jpg'
const avatar3Img = 'assets/img/avatar/03.jpg'
const avatar4Img = 'assets/img/avatar/04.jpg'
const avatar5Img = 'assets/img/avatar/05.jpg'
const avatar6Img = 'assets/img/avatar/06.jpg'
const avatar40Img = 'assets/img/avatar/40.jpg'
const avatar41Img = 'assets/img/avatar/41.jpg'

const avatar1Img = 'assets/img/avatar/01.jpg'

export type FeatureType = {
  icon: string
  title: string
  description: string
}

export type IndustryType = {
  id: string
  image: string
  name: string
  about: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
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

export type AnchorType = UserType

export type NewsType = {
  cover: string
  category?: string
  title: string
  time: string
  description?: string
  anchor: AnchorType
}

export const featureData: FeatureType[] = [
  {
    icon: 'bx-rocket',
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.',
  },
  {
    icon: 'bx-like',
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies. Magna aliquam id nunc.',
  },
  {
    icon: 'bx-time-five',
    title: 'On Time Service',
    description:
      'Nisi augue at ridiculus odio ullamcorper in id. In bibendum diam nunc dignissim magna morbi mattis enim.',
  },
  {
    icon: 'bx-group',
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat.',
  },
]

export const industryData: IndustryType[] = [
  {
    id: 'industry-1',
    image: industry1,
    name: 'Transportation & Logistics',
    about:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.',
  },
  {
    id: 'industry-2',
    image: industry2,
    name: 'Startup and technology',
    about:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.',
  },
  {
    id: 'industry-3',
    image: industry3,
    name: 'E-commerce',
    about:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed amet suspendisse duis aliquet. Justo quam convallis id sed.',
  },
]

export const brandsData: BrandType[] = [
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

export const userData: UserType[] = [
  {
    image: avatar3Img,
    name: 'Fannie Summers',
    role: 'Founder of Lorem Company',
  },
  {
    image: avatar2Img,
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company',
  },
  {
    image: avatar6Img,
    name: 'Annette Black',
    role: 'Founder of the Agency',
  },
  {
    image: avatar4Img,
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

const anchorData: AnchorType[] = [
  {
    image: avatar40Img,
    name: 'Marvin McKinney',
    role: 'Deputy Director, Capital Department',
  },
  {
    image: avatar4Img,
    name: 'Jenny Wilson',
    role: 'Financial Sector Expert',
  },
  {
    image: avatar5Img,
    name: 'Albert Flores',
    role: 'Financial Counsellor and Director',
  },
  {
    image: avatar41Img,
    name: 'Jerome Bell',
    role: 'Business Analyst',
  },
]
const newsCategories: string[] = [
  'Business',
  'Enterprise',
  'Finance',
  'Ticks & Trips',
]
export const newsData: NewsType[] = [
  {
    cover: news1Img,
    category: newsCategories[0],
    time: '12 hours ago',
    title: 'How agile is your forecasting process?',
    anchor: anchorData[0],
  },
  {
    cover: news2Img,
    category: newsCategories[1],
    time: '1 day ago',
    title: 'A future with high public debt: low-for-long is not low forever',
    anchor: anchorData[1],
  },
  {
    cover: news3Img,
    category: newsCategories[2],
    time: 'Nov 24,' + currentYear,
    title: 'Understanding the rise in long-term rates',
    anchor: anchorData[2],
  },
  {
    cover: news4Img,
    category: newsCategories[3],
    time: 'Oct 13,' + currentYear,
    title: 'Stocks making the biggest moves after hours',
    anchor: anchorData[3],
  },
]
