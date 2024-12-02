export type CardType = {
  icon: string
  content: string
}

export type DetailType = {
  title: string
  description: string
}

export type AuthorType = {
  image?: string
  name: string
  expertise?: string
}

export type TestimonialType = {
  comment: string
  rating: number
  author: AuthorType
}

export type FaqType = {
  question: string
  answers: string
}

export type CourseType = {
  image: string
  badge?: string
  title: string
  author: AuthorType
  price: number
  discount?: number
  time: number
  like: string
}

const avatar3 = 'assets/img/avatar/03.jpg'
const avatar2 = 'assets/img/avatar/02.jpg'
const avatar4 = 'assets/img/avatar/04.jpg'
const avatar5 = 'assets/img/avatar/05.jpg'
const avatar1 = 'assets/img/avatar/01.jpg'
const avatar6 = 'assets/img/avatar/06.jpg'
const avatar7 = 'assets/img/avatar/07.jpg'

const course2 = 'assets/img/portfolio/courses/02.jpg'
const course3 = 'assets/img/portfolio/courses/03.jpg'
const course9 = 'assets/img/portfolio/courses/09.jpg'

export const programDetailData: DetailType[] = [
  {
    title: 'Introduction. Getting started',
    description:
      'Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.',
  },
  {
    title: 'The ultimate HTML developer: advanced HTML',
    description:
      'Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.',
  },
  {
    title: 'CSS & CSS3: basic',
    description:
      'Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor.',
  },
  {
    title: 'JavaScript basics for beginners',
    description:
      'Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.',
  },
  {
    title: 'Understanding APIs',
    description:
      'Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum ullamcorper.',
  },
  {
    title: 'Python from beginner to advanced',
    description:
      'Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.',
  },
]

export const cardData: CardType[] = [
  {
    icon: 'SlideshowIcon',
    content: '220 hours on-demand video',
  },
  {
    icon: 'FileIcon',
    content: '18 articles',
  },
  {
    icon: 'DownloadIcon',
    content: '25 downloadable resources',
  },
  {
    icon: 'InfiniteIcon',
    content: 'Full lifetime access',
  },
  {
    icon: 'TrophyIcon',
    content: 'Certificate of completion',
  },
]

export const authorData: AuthorType[] = [
  {
    image: avatar3,
    name: 'Fannie Summers',
    expertise: 'Designer',
  },
  {
    image: avatar2,
    name: 'Robert Fox',
    expertise: 'QA Engineer',
  },
  {
    image: avatar4,
    name: 'Annette Black',
    expertise: 'Project Manager',
  },
  {
    image: avatar5,
    name: 'Jerome Bell',
    expertise: 'Developer',
  },
  {
    image: avatar1,
    name: 'Albert Flores',
    expertise: 'PR Director',
  },
  {
    image: avatar6,
    name: 'Jenny Wilson',
    expertise: 'Marketing',
  },
  {
    image: avatar7,
    name: 'Cameron Williamson',
    expertise: 'Illustrator',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    author: authorData[0],
  },
  {
    comment:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.',
    rating: 5,
    author: authorData[1],
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    author: authorData[2],
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
    author: authorData[3],
  },
  {
    comment:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    author: authorData[4],
  },
  {
    comment:
      'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
    author: authorData[5],
  },
  {
    comment:
      'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.',
    rating: 4,
    author: authorData[6],
  },
]

const answer: string = `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.`
export const faqsData: FaqType[] = [
  {
    question: `YouTube is full of free tutorials, videos and courses. Why should I take any courses here?`,
    answers: answer,
  },
  {
    question: `What if I don't have any professional background?`,
    answers: answer,
  },
  {
    question: `How is this different from other courses on the market?`,
    answers: answer,
  },
  {
    question: `How much time does it take to do my homework per week? What if I don't like it?`,
    answers: answer,
  },
  {
    question: `Is there any kind of certificate of completion?`,
    answers: answer,
  },
]

const courseAuthorData: AuthorType[] = [
  {
    name: 'Jenny Wilson',
  },
  {
    name: 'Robert Fox',
  },
  {
    name: 'Jenny Wilson',
  },
]

export const courseData: CourseType[] = [
  {
    image: course2,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: courseAuthorData[0],
    price: 15.99,
    time: 160,
    like: '92% (3.1K)',
  },
  {
    image: course3,
    badge: 'Sale!',
    title: 'HTML, CSS, JavaScript Web Developer',
    author: courseAuthorData[1],
    price: 9.99,
    discount: 44.99,
    time: 210,
    like: '98% (2.7K)',
  },
  {
    image: course9,
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    author: courseAuthorData[2],
    price: 14.5,
    time: 120,
    like: '92% (3.8K)',
  },
]
