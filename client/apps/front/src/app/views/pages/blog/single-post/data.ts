import { currentYear } from '@states/constants'

type LinkType = {
  name: string
}

export type AuthorType = {
  avatar: string
  name: string
}

export type ArticleType = {
  image: string
  link?: LinkType
  category: string
  date: string
  title: string
  description?: string
  author: AuthorType
}

const blog1 = 'assets/img/blog/01.jpg'
const blog6 = 'assets/img/blog/06.jpg'
const blog3 = 'assets/img/blog/03.jpg'

const avatar1 = 'assets/img/avatar/01.jpg'
const avatar5 = 'assets/img/avatar/05.jpg'
const avatar2 = 'assets/img/avatar/02.jpg'

const authorData: AuthorType[] = [
  {
    avatar: avatar1,
    name: 'Jerome Bell',
  },
  {
    avatar: avatar5,
    name: 'Albert Flores',
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards',
  },
]
export const articlesData: ArticleType[] = [
  {
    image: blog1,
    category: 'Business',
    date: 'May 19,' + currentYear,
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    author: authorData[0],
    link: { name: '/blog/single-post' },
  },
  {
    image: blog6,
    category: 'Marketing',
    date: 'Apr 2,' + currentYear,
    title: 'How Agile is Your Forecasting Process?',
    author: authorData[1],
    link: { name: '/blog/single-post' },
  },
  {
    image: blog3,
    category: 'Business',
    date: 'Sep 16,' + currentYear,
    title: 'This Week in Search: New Limits and Exciting Features',
    author: authorData[2],
    link: { name: '/blog/single-post' },
  },
]
