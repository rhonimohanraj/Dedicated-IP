const course1Img = 'assets/img/portfolio/courses/07.jpg'
const course2Img = 'assets/img/portfolio/courses/01.jpg'
const course3Img = 'assets/img/portfolio/courses/09.jpg'

type LinkType = {
  name: string
}

export type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type CourseType = {
  route: LinkType
  badge?: string
  image: string
  title: string
  price: number
  discount?: number
  time: number
  like: string
  author: AuthorType
}

const authorData: AuthorType[] = [
  {
    name: 'Ralph Edwards',
  },
  {
    name: 'Albert Flores',
  },
  {
    name: 'Jenny Wilson',
  },
]

export const courseData: CourseType[] = [
  {
    route: {
      name: 'landings.online-course',
    },
    image: course1Img,
    title: 'Blender Character Creator v2.0 for Video Games Design',
    author: authorData[0],
    price: 25.0,
    time: 160,
    like: '93% (4.5K)',
  },
  {
    route: {
      name: 'landings.online-course',
    },

    badge: 'Best Seller',
    image: course2Img,
    title: 'Fullstack Web Developer Course from Scratch',
    author: authorData[1],
    price: 12.5,
    time: 220,
    like: '94% (4.2K)',
  },
  {
    route: {
      name: 'landings.online-course',
    },
    image: course3Img,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: authorData[2],
    price: 14.5,
    discount: 70,
    time: 120,
    like: '92% (3.8K)',
  },
]
