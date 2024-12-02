const chatImg = 'assets/img/landing/saas-1/features/chat.svg'
const analyticsImg = 'assets/img/landing/saas-1/features/analytics.svg'
const bellImg = 'assets/img/landing/saas-1/features/bell.svg'
const tasksImg = 'assets/img/landing/saas-1/features/tasks.svg'
const calendarImg = 'assets/img/landing/saas-1/features/calendar.svg'
const addGroupImg = 'assets/img/landing/saas-1/features/add-group.svg'
const headsetImg = 'assets/img/landing/saas-1/features/headset.svg'
const shieldImg = 'assets/img/landing/saas-1/features/shield.svg'
const googleImg = 'assets/img/brands/google.svg'
const zoomImg = 'assets/img/brands/zoom.svg'
const slackImg = 'assets/img/brands/slack.svg'
const gmaillImg = 'assets/img/brands/gmail.svg'
const trelloImg = 'assets/img/brands/trello.svg'
const mailchimpImg = 'assets/img/brands/mailchimp.svg'
const dropboxIMg = 'assets/img/brands/dropbox.svg'
const evernoteImg = 'assets/img/brands/evernote.svg'
const avatar14Img = 'assets/img/avatar/14.jpg'
const avatar13Img = 'assets/img/avatar/13.jpg'
const avatar11Img = 'assets/img/avatar/11.jpg'
const useCase1Img = 'assets/img/landing/saas-1/use-cases/01.png'
const useCase2Img = 'assets/img/landing/saas-1/use-cases/02.png'
const useCase3Img = 'assets/img/landing/saas-1/use-cases/03.png'
const useCase4Img = 'assets/img/landing/saas-1/use-cases/04.png'

import type {
  WorkType,
  FeatureType,
  PricingFeatureType,
  TestimonialType,
  WorkToolType,
  UseCaseType,
  PricingType,
} from './type'

export const featuresData: FeatureType[] = [
  {
    image: chatImg,
    title: 'Task Comments',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    image: analyticsImg,
    title: 'Tasks Analytics',
    description:
      'Augue pulvinar justo, fermentum fames aliquamant accumsan vestibulum.',
  },
  {
    image: bellImg,
    title: 'Notifications',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    image: tasksImg,
    title: 'Sections & Subtasks',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.<',
  },
  {
    image: calendarImg,
    title: 'Progress Tracking',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    image: addGroupImg,
    title: 'Multiple Assignees',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
  {
    image: headsetImg,
    title: 'Support 24/7',
    description:
      'Sapien sed massa sit erat pellentesque pellentesque nisl, elementum.',
  },
  {
    image: shieldImg,
    title: 'Data Security',
    description:
      'Aliquet felis facilisi sem nunc. Sapien fermentum, fringilla molestie lorem nec.',
  },
]

export const workData: WorkType[] = [
  {
    title: 'Powerful project management',
  },
  {
    title: 'Transparent work management',
  },
  {
    title: 'Manage work & focus on the most important tasks',
  },
  {
    title: 'Track your progress with interactive charts',
  },
  {
    title: 'Easiest way to track time spent on tasks',
  },
]

export const useCasesData: UseCaseType[] = [
  {
    icon: 'bx bx-star',
    title: 'Project Management',
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    image: useCase1Img,
    imageWidth: 592,
  },
  {
    icon: 'bx bx-briefcase-alt-2',
    title: 'Remote Work',
    description:
      'Ut ornare quisque blandit condimentum nec viverra habitant non. Consequat id leo bibendum enim, fringilla pulvinar volutpat fames. Ut fames ut sed lobortis nulla. In dui enim et pharetra gravida diam semper lectus tellus. Faucibus mi convallis.',
    image: useCase2Img,
    imageWidth: 502,
  },
  {
    icon: 'bx bx-rocket',
    title: 'Product Release',
    description:
      'Fames netus pretium massa lobortis sit metus et. Sit risus odio fermentum hac fames enim, ac, in. Neque lacus, consequat hendrerit potenti in tristique dictum. Tortor nec lorem et venenatis facilisis risus viverra nunc, eu. Eget suscipit vel amet.',
    image: useCase3Img,
    imageWidth: 525,
  },
  {
    icon: 'bx bx-bar-chart-alt-2',
    title: 'Campaign Planning',
    description:
      'Diam bibendum scelerisque vel mauris magna. Iaculis interdum tincidunt eget nibh purus. Aliquet at sit morbi nisi volutpat fermentum scelerisque. Enim tincidunt eros sodales integer sapien. Eu ullamcorper egestas odio nunc faucibus. Sapien eu nunc sed facilisi luctus ac.',
    image: useCase4Img,
    imageWidth: 545,
  },
]

const usersData = [
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
    image: avatar11Img,
    name: 'Darrell Steward',
    role: 'Project Manager at Ipsum Ltd.',
  },
]
export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    user: usersData[0],
  },
  {
    comment:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus.',
    user: usersData[1],
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.',
    user: usersData[2],
  },
]

export const workToolsData: WorkToolType[] = [
  {
    image: googleImg,
  },
  {
    image: zoomImg,
  },
  {
    image: slackImg,
  },
  {
    image: gmaillImg,
  },
  {
    image: trelloImg,
  },
  {
    image: mailchimpImg,
  },
  {
    image: dropboxIMg,
  },
  {
    image: evernoteImg,
  },
]

export const features: PricingFeatureType[] = [
  {
    id: 1,
    info: 'Aenean neque tortor, purus faucibus',
  },
  {
    id: 2,
    info: 'Nullam augue vitae et volutpat sagittis',
  },
  {
    id: 3,
    info: 'Mauris massa penatibus enim elit quam',
  },
  {
    id: 4,
    info: 'Nec ac sagittis nunc bibendum',
  },
  {
    id: 5,
    info: 'Odio ut orci volutpat ultricies eleifend',
  },
]

export const pricingPlan: PricingType[] = [
  {
    planName: 'Basic',
    icon: 'assets/img/landing/saas-1/pricing/basic.png',
    monthlyPrice: 6,
    yearlyPrice: 5.4,
    availableFeatures: [1, 2],
  },
  {
    planName: 'Standard',
    icon: 'assets/img/landing/saas-1/pricing/standard.png',
    monthlyPrice: 12.0,
    yearlyPrice: 10.8,
    availableFeatures: [1, 2, 3, 4],
    status: 'active',
  },
  {
    planName: 'Ultimate',
    icon: 'assets/img/landing/saas-1/pricing/ultimate.png',
    monthlyPrice: 18.0,
    yearlyPrice: 16.2,
    availableFeatures: [1, 2, 3, 4, 5],
  },
]
