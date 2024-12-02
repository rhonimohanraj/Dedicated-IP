export type StatsType = {
  image: string
  number: string
  content: string
}

export type BrandType = {
  image: string
  about?: string
}

export type UserType = {
  image: string
  name: string
  role: string
}

export type TestimonialType = {
  comment: string
  user: UserType
}

type SocialProfileType = {
  icons: string[]
}

export type LeaderType = {
  image: string
  name: string
  role: string
  socialProfile: SocialProfileType
}

const headsetImg = 'assets/img/about/icons/headset-light.svg'
const chatLightImg = 'assets/img/about/icons/chat-light.svg'
const addGroupLightImg = 'assets/img/about/icons/add-group-light.svg'
const locationLightImg = 'assets/img/about/icons/location-light.svg'

const brands1Img = 'assets/img/brands/01.svg'
const brands2Img = 'assets/img/brands/02.svg'
const brands3Img = 'assets/img/brands/03.svg'
const brands4Img = 'assets/img/brands/04.svg'
const brands5Img = 'assets/img/brands/05.svg'
const brands6Img = 'assets/img/brands/06.svg'

const avatar5Img = 'assets/img/avatar/05.jpg'
const avatar6Img = 'assets/img/avatar/06.jpg'
const avatar1Img = 'assets/img/avatar/01.jpg'

const team9Img = 'assets/img/team/09.jpg'
const team10Img = 'assets/img/team/10.jpg'
const team11Img = 'assets/img/team/11.jpg'
const team12Img = 'assets/img/team/12.jpg'
const team13Img = 'assets/img/team/13.jpg'
const team14Img = 'assets/img/team/14.jpg'
const team15Img = 'assets/img/team/15.jpg'

export const statsData: StatsType[] = [
  {
    image: headsetImg,
    number: '2,480',
    content: 'Remote Professionals',
  },
  {
    image: chatLightImg,
    number: '1,200',
    content: 'Requests per Week',
  },
  {
    image: addGroupLightImg,
    number: '760',
    content: 'New Clients per Month',
  },
  {
    image: locationLightImg,
    number: '58',
    content: 'Countries Using Our Product',
  },
]

export const brandData: BrandType[] = [
  {
    image: brands1Img,
  },
  {
    image: brands2Img,
  },
  {
    image: brands3Img,
  },
  {
    image: brands4Img,
  },
  {
    image: brands5Img,
  },
  {
    image: brands6Img,
  },
]

const userData: UserType[] = [
  {
    image: avatar5Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Company',
  },
  {
    image: avatar6Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Ipsum Ltd.',
  },
  {
    image: avatar1Img,
    name: 'Darrell Steward1',
    role: 'Project Manager at Company Ltd.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    user: userData[0],
  },
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    user: userData[1],
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    user: userData[2],
  },
]

export const leaderData: LeaderType[] = [
  {
    image: team9Img,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socialProfile: {
      icons: ['facebook', 'linkedin', 'twitter'],
    },
  },
  {
    image: team10Img,
    name: 'Darrell Steward',
    role: 'Lead Develope',
    socialProfile: {
      icons: ['facebook', 'linkedin', 'twitter'],
    },
  },
  {
    image: team11Img,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socialProfile: {
      icons: ['facebook', 'dribbble', 'linkedin'],
    },
  },
  {
    image: team12Img,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socialProfile: {
      icons: ['instagram', 'linkedin'],
    },
  },
  {
    image: team13Img,
    name: 'Annette Black',
    role: 'Lead UI Designer1',
    socialProfile: {
      icons: ['facebook', 'dribbble', 'behance'],
    },
  },
  {
    image: team14Img,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    socialProfile: {
      icons: ['facebook', 'linkedin'],
    },
  },
  {
    image: team15Img,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socialProfile: {
      icons: ['facebook', 'dribbble', 'behance'],
    },
  },
]
