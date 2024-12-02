const industry1Img = 'assets/img/landing/software-agency-3/industries/01.jpg'
const industry2Img = 'assets/img/landing/software-agency-3/industries/02.jpg'
const industry3Img = 'assets/img/landing/software-agency-3/industries/03.jpg'
const avatar9Img = 'assets/img/avatar/09.jpg'
const avatar3Img = 'assets/img/avatar/03.jpg'

import { currentYear } from '@states/constants'
import type {
  IndustryType,
  BlogType,
  UserType,
  appType,
  ToolsType,
  PriceType,
} from './type'

export const appData: appType[] = [
  {
    icon: 'bx bx-star',
    title: 'Economic Analysis',
    discription:
      '<p class="mb-4 pb-lg-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>',
    image: 'assets/img/landing/saas-4/about/01.png',
  },
  {
    icon: 'bx bx-briefcase-alt-2',
    title: 'Investments',
    discription: `<div class="d-sm-flex mb-4 pb-lg-3 text-sm-start">
    <p class="w-100 mb-sm-0">It is a long established fact that a reader will be distracted by the readable content.</p>
    <span class="d-sm-block d-none w-1 mx-4">
      <span class="d-dark-mode-none d-block w-100 h-100 bg-black opacity-25"></span>
      <span class="d-dark-mode-block d-none w-100 h-100 bg-white opacity-25"></span>
    </span>
    <p class="w-100 mb-sm-0">Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio</p>
  </div>`,
    image: 'assets/img/landing/saas-4/about/02.png',
  },
  {
    icon: 'bx bx-bar-chart-alt-2',
    title: 'Corporate Finance',
    discription: `<ul class="list-unstyled mb-4 pb-lg-3">
    <li class="d-flex justify-content-md-start justify-content-center mt-2">
      <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
      Transparent work management
    </li>
    <li class="d-flex justify-content-md-start justify-content-center mt-2">
      <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
      Track your progress with interactive charts
    </li>
    <li class="d-flex justify-content-md-start justify-content-center mt-2">
      <i class="bx bx-check-circle me-2 fs-5 text-primary"></i>
      Easiest way to track time spent on tasks
    </li>
  </ul>`,
    image: 'assets/img/landing/saas-4/about/03.png',
  },
]

export const industryData: IndustryType[] = [
  {
    id: '#industry-1',
    image: industry1Img,
    name: ' Finance and insurance',
    about:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.',
  },
  {
    id: '#industry-2',
    image: industry2Img,
    name: 'Startup and technology',
    about:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.',
  },
  {
    id: '#industry-3',
    image: industry3Img,
    name: 'E-commerce',
    about:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed amet suspendisse duis aliquet. Justo quam convallis id sed.',
  },
]

const userData: UserType[] = [
  {
    image: avatar9Img,
    name: 'Esther Howard',
  },
  {
    image: avatar3Img,
    name: 'Esther Howard',
  },
]

export const blogData: BlogType[] = [
  {
    time: 'Sep 10, ' + currentYear,
    user: userData[0],
    title: "A Study on Smartwatch Design Qualities and People's Preferences",
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4,
  },
  {
    time: 'Sep 10, ' + currentYear,
    user: userData[1],
    title: "A Study on Smartwatch Design Qualities and People's Preferences",
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque, eget nisi, faucibus. Habitasse dui dui nibh ipsum sem amet sed fusce ipsum donec amet.',
    liked: 8,
    commented: 7,
    shared: 4,
  },
]

export const priceData: PriceType[] = [
  {
    id: 1,
    title: 'Team',
    subtitle: 'Best for small teams',
    monthlyamount: '15',
    annualamount: '12',
  },
  {
    id: 2,
    title: 'Company',
    subtitle: 'Best for growing teams',
    monthlyamount: '25',
    annualamount: '20',
    status: 'active',
  },
  {
    id: 3,
    title: 'Enterprise',
    subtitle: 'Best for large teams',
    monthlyamount: '50',
    annualamount: '40',
  },
]
