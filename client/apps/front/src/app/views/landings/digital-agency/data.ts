import { currentYear } from '@states/constants'

const ideas = 'assets/img/landing/digital-agency/icons/idea.svg'
const award = 'assets/img/landing/digital-agency/icons/award.svg'
const team = 'assets/img/landing/digital-agency/icons/team.svg'
const service1 = 'assets/img/landing/digital-agency/services/01.png'
const service2 = 'assets/img/landing/digital-agency/services/02.png'
const service3 = 'assets/img/landing/digital-agency/services/03.png'
const service4 = 'assets/img/landing/digital-agency/services/04.png'
const service5 = 'assets/img/landing/digital-agency/services/05.png'

const brand1SvgImg = 'assets/img/brands/01.svg'
const brand2SvgImg = 'assets/img/brands/02.svg'
const brand3SvgImg = 'assets/img/brands/03.svg'
const brand4SvgImg = 'assets/img/brands/04.svg'
const brand5SvgImg = 'assets/img/brands/05.svg'
const brand6SvgImg = 'assets/img/brands/06.svg'

const avatar1 = 'assets/img/testimonials/01.jpg'
const avatar2 = 'assets/img/testimonials/02.jpg'
const avatar3 = 'assets/img/testimonials/03.jpg'

const webby = 'assets/img/landing/digital-agency/awards/webby.svg'
const cssda = 'assets/img/landing/digital-agency/awards/cssda.svg'
const awwwards = 'assets/img/landing/digital-agency/awards/awwwards.svg'
const fwa = 'assets/img/landing/digital-agency/awards/fwa.svg'

const avatar8Img = 'assets/img/avatar/08.jpg'
const avatar9Img = 'assets/img/avatar/09.jpg'
const avatar10Img = 'assets/img/avatar/10.jpg'

const blog1 = 'assets/img/landing/digital-agency/blog/01.jpg'
const blog2 = 'assets/img/landing/digital-agency/blog/02.jpg'
const blog3 = 'assets/img/landing/digital-agency/blog/03.jpg'

export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type ServiceType = {
  image?: string
  title: string
  description: string
}

export type BrandType = {
  image: string
  name?: string
  about?: string
}

export type UserType = {
  image?: string
  name: string
  role: string
  brand: BrandType
}

export type TestimonialType = {
  id: string
  rating?: number
  comment: string
  user: UserType
}
export type AuthorType = {
  image?: string
  name: string
  expertise: string
}

export type BlogType = {
  category?: string
  cover: string
  time: string
  link?: string
  author: AuthorType
  title: string
  description?: string
  liked: number
  commented: number
  shared: number
}

export const featureData: FeatureType[] = [
  {
    image: ideas,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.',
  },
  {
    image: award,
    title: 'Award Winning',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.',
  },
  {
    image: team,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.',
  },
]

export const servicesData: ServiceType[] = [
  {
    image: service1,
    title: 'Digital Marketing',
    description:
      'Nisi, sed accumsan tincidunt pulvinar sapien. Neque, adipiscing posuere amet eget cursus mattis egestas nec quam. Tellus in lectus volutpat tellus bibendum. Etiam id phasellus in proin tristique. Semper habitasse volutpat et urna dui sed in pellentesque purus. Convallis viverra faucibus lacus nunc venenatis.',
  },
  {
    image: service2,
    title: 'Web Development',
    description:
      'Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.',
  },
  {
    image: service3,
    title: 'Application Development',
    description:
      'Morbi tristique justo, ut ac facilisi vel. Faucibus tortor libero commodo maecenas commodo sed. Sapien, vitae senectus turpis enim habitasse ipsum justo. Sagittis vel tortor velit dapibus dictum facilisis dictumst aliquam. Et, tempus euismod non semper vitae egestas semper eget turpis. Eros, pellentesque sed ut faucibus ac egestas leo metus.',
  },
  {
    image: service4,
    title: 'Strategy',
    description:
      'Non bibendum mauris velit at enim. Vel tellus nunc malesuada pellentesque feugiat nibh mauris blandit. Tempus, ut vulputate feugiat quis molestie sit eu blandit rhoncus. Iaculis eget magna sit eget eget massa. Diam nunc dolor tristique lectus imperdiet. Nunc, vitae etiam venenatis arcu turpis sollicitudin amet sit. Ac dapibus non erat sed. Auctor eleifend mattis scelerisque gravida felis nibh. Habitant nascetur turpis ullamcorper.',
  },
  {
    image: service5,
    title: 'Digital Advertising',
    description:
      'Nulla odio diam, arcu dictum neque nec cursus. Vel, aliquam nisl ridiculus sed. Pulvinar lectus ac pellentesque sollicitudin tristique aliquet ullamcorper in eu. Tincidunt porta magna faucibus neque, nunc gravida sagittis. Ut tellus sed odio laoreet. Molestie sit viverra maecenas nisl felis consequat.',
  },
]

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg,
    name: 'Lorem Ltd.',
  },
  {
    image: brand2SvgImg,
    name: 'Company LLC',
  },
  {
    image: brand3SvgImg,
    name: 'Ipsum Ltd.',
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

const userData: UserType[] = [
  {
    image: avatar1,
    name: 'Ralph Edwards',
    role: 'Head of Marketing',
    brand: brandData[0],
  },
  {
    image: avatar2,
    name: 'Annette Black',
    role: 'Strategic Advisor',
    brand: brandData[1],
  },
  {
    image: avatar3,
    name: 'Darrell Steward',
    role: 'Project Manager',
    brand: brandData[2],
  },
]

export const testimonialData: TestimonialType[] = [
  {
    id: 'author-1',
    comment: `Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.`,
    user: userData[0],
  },
  {
    id: 'author-2',
    comment: `Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.`,
    user: userData[1],
  },
  {
    id: 'author-3',
    comment: `Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.`,
    user: userData[2],
  },
]

export const awardData = [
  {
    image: webby,
    title: '4x mobile of the day',
  },
  {
    image: cssda,
    title: '1x Kudos',
  },
  {
    image: awwwards,
    title: '3x website of the day',
  },
  {
    image: fwa,
    title: '2x best website',
  },
]

const authorData: AuthorType[] = [
  {
    image: avatar10Img,
    name: 'Jerome Bell',
    expertise: 'Marketing Specialist',
  },
  {
    image: avatar8Img,
    name: 'Annette Black',
    expertise: 'Product Manager',
  },
  {
    image: avatar9Img,
    name: 'Marvin McKinney',
    expertise: 'Senior UI/UX Designer',
  },
]

const categories = ['Digital', 'Design', 'Tips & Advice']

export const blogData: BlogType[] = [
  {
    time: '12 hours ago',
    cover: blog1,
    author: authorData[0],
    category: categories[0],
    title: 'A study on smartwatch design qualities and people’s preferences',
    liked: 8,
    commented: 7,
    shared: 4,
  },
  {
    time: '1 day ago',
    cover: blog2,
    author: authorData[1],
    category: categories[1],
    title: 'Brand analysis: second step to the brand identity',
    liked: 8,
    commented: 7,
    shared: 4,
  },
  {
    time: 'May 24, ' + currentYear,
    cover: blog3,
    author: authorData[2],
    category: categories[2],
    title: 'How to check the website before releasing it?',
    liked: 8,
    commented: 7,
    shared: 4,
  },
]
