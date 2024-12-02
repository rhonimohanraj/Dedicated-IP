const course1Img = 'assets/img/portfolio/courses/01.jpg'
const course2Img = 'assets/img/portfolio/courses/02.jpg'
const course3Img = 'assets/img/portfolio/courses/03.jpg'
const course4Img = 'assets/img/portfolio/courses/04.jpg'
const course5Img = 'assets/img/portfolio/courses/05.jpg'
const course6Img = 'assets/img/portfolio/courses/06.jpg'
const course7Img = 'assets/img/portfolio/courses/07.jpg'
const course8Img = 'assets/img/portfolio/courses/08.jpg'
const course9Img = 'assets/img/portfolio/courses/09.jpg'

type LinkType = {
  name: string
}

type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type CourseType = {
  link: LinkType
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
    name: 'Albert Flores',
  },
  {
    name: 'Jenny Wilson',
  },
  {
    name: 'Esther Howard',
  },
  {
    name: 'Robert Fox',
  },
  {
    name: 'Marvin McKinney',
  },
  {
    name: 'Ralph Edwards',
  },
]

export const courseData: CourseType[] = [
  {
    link: {
      name: '',
    },
    badge: 'Best Seller',
    image: course1Img,
    title: 'Fullstack Web Developer Course from Scratch',
    author: authorData[0],
    price: 12.5,
    time: 220,
    like: '94% (4.2K)',
  },
  {
    link: {
      name: '',
    },
    image: course2Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[1],
    price: 15.99,
    time: 160,
    like: '92% (3.1K)',
  },
  {
    link: {
      name: '',
    },
    badge: 'Sale!',
    image: course3Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[2],
    price: 9.99,
    discount: 70,
    time: 210,
    like: '98% (2.7K)',
  },
  {
    link: {
      name: '',
    },
    image: course4Img,
    title: 'iOS & Swift - The Complete iOS App Development Course',
    author: authorData[4],
    price: 15.99,
    time: 170,
    like: '95% (3.3K)',
  },
  {
    link: {
      name: '',
    },
    badge: 'Best Seller',
    image: course5Img,
    title: 'Data Science & Machine Learning with Python',
    author: authorData[2],
    price: 19.75,
    time: 150,
    like: '96% (3.8K)',
  },
  {
    link: {
      name: '',
    },
    image: course6Img,
    title: 'Creative CSS Drawing Course: Make Art With CSS',
    author: authorData[3],
    price: 17.99,
    time: 110,
    like: '92% (5.3K)',
  },
  {
    link: {
      name: '',
    },
    image: course7Img,
    title: 'Blender Character Creator v2.0 for Video Games Design',
    author: authorData[5],
    price: 25.0,
    time: 160,
    like: '93% (4.5K)',
  },
  {
    link: {
      name: '',
    },
    badge: 'Sale!',
    image: course8Img,
    title: 'The Ultimate Guide to 2D Mobile Game Development with Unity',
    author: authorData[0],
    price: 12.99,
    discount: 34.99,
    time: 230,
    like: '97% (4.1K)',
  },
  {
    link: {
      name: '',
    },
    image: course9Img,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: authorData[1],
    price: 14.5,
    time: 120,
    like: '92% (3.8K)',
  },
]
