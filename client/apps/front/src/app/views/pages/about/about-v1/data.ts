export type BenefitType = {
  image: string
  title: string
  description: string
}

export type AwardsType = {
  image: string
  title: string
  description?: string
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
  icon: string[]
  link?: string
}

export type TeamMemberType = {
  image: string
  name: string
  role: string
  socialProfile: SocialProfileType
}

export type SocialNetworkType = {
  icon: string
  title: string
  socialId: string
}

const ideaImg = 'assets/img/landing/digital-agency/icons/idea.svg'
const awardImg = 'assets/img/landing/digital-agency/icons/award.svg'
const teamImg = 'assets/img/landing/digital-agency/icons/team.svg'
const webbyImg = 'assets/img/landing/digital-agency/awards/webby.svg'
const cssdaImg = 'assets/img/landing/digital-agency/awards/cssda.svg'
const awwwardsImg = 'assets/img/landing/digital-agency/awards/awwwards.svg'
const fwaImg = 'assets/img/landing/digital-agency/awards/fwa.svg'
const avatar14Img = 'assets/img/avatar/14.jpg'
const avatar13Img = 'assets/img/avatar/13.jpg'
const avatar12Img = 'assets/img/avatar/12.jpg'

const team1Img = 'assets/img/team/01.jpg'
const team2Img = 'assets/img/team/02.jpg'
const team3Img = 'assets/img/team/03.jpg'
const team4Img = 'assets/img/team/04.jpg'
const team5Img = 'assets/img/team/05.jpg'
const team6Img = 'assets/img/team/06.jpg'
const team7Img = 'assets/img/team/07.jpg'
const team8Img = 'assets/img/team/08.jpg'

export const benefitsData: BenefitType[] = [
  {
    image: ideaImg,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.',
  },
  {
    image: awardImg,
    title: 'Award Winning',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.',
  },
  {
    image: teamImg,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.',
  },
]

export const awardsData: AwardsType[] = [
  {
    image: webbyImg,
    title: '4x mobile of the day',
  },
  {
    image: cssdaImg,
    title: '1x Kudos',
  },
  {
    image: awwwardsImg,
    title: '3x website of the day',
  },
  {
    image: fwaImg,
    title: '2x best website',
  },
]

const userData: UserType[] = [
  {
    image: avatar14Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC',
  },
  {
    image: avatar13Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.',
  },
  {
    image: avatar12Img,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus.',
    user: userData[0],
  },
  {
    comment:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    user: userData[1],
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare.',
    user: userData[2],
  },
]

export const teamMemberData: TeamMemberType[] = [
  {
    image: team1Img,
    name: 'Jenny Wilson',
    role: 'Co-Founder & CEO',
    socialProfile: {
      icon: ['facebook', 'linkedin', 'twitter'],
    },
  },

  {
    image: team2Img,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socialProfile: {
      icon: ['facebook', 'linkedin', 'twitter'],
    },
  },
  {
    image: team3Img,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socialProfile: {
      icon: ['facebook', 'dribbble', 'linkedin'],
    },
  },
  {
    image: team4Img,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socialProfile: {
      icon: ['facebook', 'twitter', 'linkedin'],
    },
  },
  {
    image: team5Img,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    socialProfile: {
      icon: ['facebook', 'behance', 'dribbble'],
    },
  },
  {
    image: team6Img,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socialProfile: {
      icon: ['facebook', 'dribbble', 'behance'],
    },
  },
  {
    image: team7Img,
    name: 'Darrell Steward',
    role: 'Lead Develope',
    socialProfile: {
      icon: ['facebook', 'stack-overflow', 'github'],
    },
  },
  {
    image: team8Img,
    name: 'Jane Cooper',
    role: 'Senior Project Manager',
    socialProfile: {
      icon: ['facebook', 'linkedin', 'twitter'],
    },
  },
]

const socialId: string[] = ['silicon', '@silicon', 'silicon inc.']
export const socialNetworkData: SocialNetworkType[] = [
  {
    icon: 'facebook',
    title: 'Facebook',
    socialId: socialId[0],
  },
  {
    icon: 'instagram',
    title: 'Instagram',
    socialId: socialId[1],
  },
  {
    icon: 'twitter',
    title: 'Twitter',
    socialId: socialId[1],
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    socialId: socialId[2],
  },
  {
    icon: 'youtube',
    title: 'YouTube',
    socialId: socialId[0],
  },
  {
    icon: 'dribbble',
    title: 'Dribbble',
    socialId: socialId[0],
  },
]
