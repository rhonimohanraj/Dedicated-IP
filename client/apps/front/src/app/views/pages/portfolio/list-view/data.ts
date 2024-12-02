import { currentYear } from '@states/constants'

const list1 = 'assets/img/portfolio/list/01.jpg'
const list2 = 'assets/img/portfolio/list/02.jpg'
const list3 = 'assets/img/portfolio/list/03.jpg'
const list4 = 'assets/img/portfolio/list/04.jpg'

type LinkType = {
  name: string
}

type ListType = {
  image: string
  date: string
  title: string
  category: string
  description: string
  link?: LinkType
}

const categories: string[] = [
  'Graphic Design',
  'UI / UX',
  'Motion Design',
  'Web Design',
]
export const listData: ListType[] = [
  {
    image: list1,
    date: 'Nov 18,' + currentYear,
    title: 'SaaS Project Management Tool',
    category: categories[0],
    description:
      'Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.',
    link: { name: 'pages.single-project' },
  },
  {
    image: list2,
    date: 'Nov 9,' + currentYear,
    title: 'Mobile Banking App',
    category: categories[1],
    description:
      'Malesuada eu cursus natoque purus ipsum nunc, velit cras tellus. Maecenas viverra pellentesque at ultrices purus vitae quis erat volutpat. Turpis auctor neque bibendum id pellentesque ut egestas. Donec ut faucibus nisl nec at purus. Cursus vel gravida gravida purus varius feugiat.Semper mauris id adipiscing est. Nam leo rutrum gravida curabitur at vel risus.',
    link: { name: 'pages.single-project' },
  },
  {
    image: list3,
    date: 'Oct 25,' + currentYear,
    title: 'Tool for Task Management',
    category: categories[2],
    description:
      'Tortor suspendisse enim convallis mauris, tincidunt ornare non tempor, turpis. Ultricies elit vitae imperdiet luctus lorem tellus, vel. Non sodales facilisis amet vulputate massa ultricies volutpat consectetur velit.',
    link: { name: 'pages.single-project' },
  },
  {
    image: list4,
    date: 'Aug 23,' + currentYear,
    title: 'Hospital and Healthcare Website',
    category: categories[3],
    description:
      'Adipiscing amet placerat orci, non iaculis. Velit nec nec risus, ultrices mus integer nibh bibendum. In sagittis, habitant viverra nibh massa luctus. Lobortis tristique lorem in nisl, aliquam eu pretium hendrerit. Mauris, varius interdum dui elementum neque mi. Tortor amet ornare felis erat.  Arcu enim nunc, porttitor libero massa.',
    link: { name: 'pages.single-project' },
  },
]
