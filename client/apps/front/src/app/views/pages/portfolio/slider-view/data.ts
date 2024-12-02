import { currentYear } from '@states/constants'

const slide1 = 'assets/img/portfolio/slider/01.jpg'
const slide2 = 'assets/img/portfolio/slider/02.jpg'
const slide3 = 'assets/img/portfolio/slider/03.jpg'

type LinkType = {
  name: string
}

type SliderType = {
  id: string
  image: string
  title: string
  description: string
  client: string
  category: string
  date: string
  link?: LinkType
}

export const sliderData: SliderType[] = [
  {
    id: 'project-1',
    image: slide1,
    title: '3D Shape Illustration',
    description:
      'Proin odio elit fringilla pellentesque erat sapien, cursus id. Sed mi semper amet fringilla. Eget morbi arcu ac vestibulum sodales. Montes, integer lacinia amet tristique tincidunt.',
    client: 'Stackbros Inc.',
    category: 'Graphic Design',
    date: '29 November ' + currentYear,
    link: { name: 'pages.single-project' },
  },
  {
    id: 'project-2',
    image: slide2,
    title: 'Scene of Human Head',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Lorem Ipsum Ltd.',
    category: 'Motion Design',
    date: '15 October ' + currentYear,
    link: { name: 'pages.single-project' },
  },
  {
    id: 'project-3',
    image: slide3,
    title: 'Blue Whale Shape',
    description:
      'Sed vehicula nibh quis ipsum gravida, sit amet convallis est sodales. Integer pulvinar suscipit ipsum, sed facilisis libero vehicula semper. Donec vitae dolor fermentum lorem pretium condimentum.',
    client: 'Great Company LLC',
    category: '3D Design',
    date: '18 September ' + currentYear,
    link: { name: 'pages.single-project' },
  },
]
