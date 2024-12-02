const course1Img = 'assets/img/portfolio/courses/01.jpg'
const course2Img = 'assets/img/portfolio/courses/02.jpg'
const course3Img = 'assets/img/portfolio/courses/03.jpg'
const course5Img = 'assets/img/portfolio/courses/05.jpg'
const course8Img = 'assets/img/portfolio/courses/08.jpg'

const step1DarkImg = 'assets/img/landing/online-courses/steps/01-dark.svg'
const step1LightImg = 'assets/img/landing/online-courses/steps/01-light.svg'
const step2DarkImg = 'assets/img/landing/online-courses/steps/02-dark.svg'
const step2LightImg = 'assets/img/landing/online-courses/steps/02-light.svg'
const step3DarkImg = 'assets/img/landing/online-courses/steps/03-dark.svg'
const step3LightImg = 'assets/img/landing/online-courses/steps/03-light.svg'
const step4DarkImg = 'assets/img/landing/online-courses/steps/04-dark.svg'
const step4LightImg = 'assets/img/landing/online-courses/steps/04-light.svg'

const icons1Img = 'assets/img/landing/online-courses/icons/01.svg'
const icons2Img = 'assets/img/landing/online-courses/icons/02.svg'
const icons3Img = 'assets/img/landing/online-courses/icons/03.svg'

const avatar13Img = 'assets/img/avatar/13.jpg'
const avatar14Img = 'assets/img/avatar/14.jpg'
const avatar11Img = 'assets/img/avatar/11.jpg'

const brand1Img = 'assets/img/brands/01.svg'
const brand2Img = 'assets/img/brands/02.svg'
const brand3Img = 'assets/img/brands/03.svg'
const brand4Img = 'assets/img/brands/04.svg'
const brand5Img = 'assets/img/brands/05.svg'
const brand6Img = 'assets/img/brands/06.svg'

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

type ImageType = {
  light: string
  dark: string
}

export type ProcessType = {
  image: ImageType
  title: string
  description: string
}

export type FeatureType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type TestimonialType = {
  comment: string
  rating?: number
  user: UserType
}

export type BrandsType = {
  image?: string
  name?: string
  about?: string
}

export type FaqsType = {
  question: string
  answers: string[]
}

export const courses: string[] = [
  'Web Development',
  'Data Science',
  'Mobile Development',
  'Programming',
  'Game Development',
  'Software Testing',
  'Software Engineering',
  'Network & Security',
]

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
]

export const popularCourseData: CourseType[] = [
  {
    route: {
      name: 'landings.online-course',
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
    route: {
      name: 'landings.online-course',
    },
    image: course2Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[1],
    price: 15.99,
    time: 160,
    like: '92% (3.1K)',
  },
  {
    route: {
      name: 'landings.online-course',
    },
    badge: 'Sale!',
    image: course3Img,
    title: 'HTML, CSS, JavaScript Web Developer',
    author: authorData[2],
    price: 9.99,
    discount: 44.99,
    time: 210,
    like: '98% (2.7K)',
  },
  {
    route: {
      name: 'landings.online-course',
    },
    image: course5Img,
    title: 'Data Science & Machine Learning with Python',
    author: authorData[2],
    price: 13.99,
    time: 170,
    like: '96% (3.8K)',
  },
  {
    route: {
      name: 'landings.online-course',
    },
    image: course8Img,
    title: 'The Ultimate Guide to Unity Game Development',
    author: authorData[0],
    price: 29.99,
    time: 250,
    like: '95% (5.4K)',
  },
]

export const processData: ProcessType[] = [
  {
    image: {
      light: step1LightImg,
      dark: step1DarkImg,
    },
    title: 'Find what fascinates you & choose your course',
    description:
      'Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.',
  },
  {
    image: {
      light: step2LightImg,
      dark: step2DarkImg,
    },
    title: 'Learn by doing',
    description:
      'Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer ac nunc dapibus.',
  },
  {
    image: {
      light: step3LightImg,
      dark: step3DarkImg,
    },
    title: 'Get instant expert feedback',
    description:
      'Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.',
  },
  {
    image: {
      light: step4LightImg,
      dark: step4DarkImg,
    },
    title: 'Put your learning into practice & find your dream job',
    description:
      'Sed fermentum ut nibh duis. Dolor pretium arcu, tincidunt ultrices tristique arcu cursus massa gravida tortor nulla, mollis id pretium.',
  },
]

export const featureData: FeatureType[] = [
  {
    image: icons1Img,
    title: '25K+ Online Video Courses',
    description:
      'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
  },
  {
    image: icons2Img,
    title: 'Mentor-Based Learning',
    description:
      'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
  },
  {
    image: icons3Img,
    title: 'Lifetime Access',
    description:
      'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
  },
]

const userData: UserType[] = [
  {
    image: avatar13Img,
    name: 'Ralph Edwards',
    role: 'Head of Marketing at Lorem Ltd.',
  },
  {
    image: avatar14Img,
    name: 'Annette Black',
    role: 'Strategic Advisor at Company LLC',
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
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    user: userData[0],
  },
  {
    comment:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus.',
    user: userData[1],
  },
  {
    comment:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare.',
    user: userData[2],
  },
]

export const brandsData: BrandsType[] = [
  {
    image: brand1Img,
  },
  {
    image: brand2Img,
  },
  {
    image: brand3Img,
  },
  {
    image: brand4Img,
  },
  {
    image: brand5Img,
  },
  {
    image: brand6Img,
  },
]

export const faqsData: FaqsType[] = [
  {
    question: `What if I don't have any professional background?`,
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.`,
    ],
  },
  {
    question: `How is this different from other courses on the market?`,
    answers: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh. Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est eget libero convallis fringilla suspendisse.`,
      `Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.`,
    ],
  },
  {
    question: `How much time does it take to do my homework per week? What if I don't like it?`,
    answers: [
      `Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non cursus libero eleifend quis. Aliquam aliquam odio dui.`,
    ],
  },
  {
    question: `Is there any kind of certificate of completion?`,
    answers: [
      `Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.`,
      `Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.`,
    ],
  },
  {
    question: `YouTube is full of free tutorials, videos and courses. Why should I take any courses here?`,
    answers: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in facilisis nibh. Vestibulum ac porttitor sapien. Curabitur laoreet malesuada gravida. Phasellus vehicula vestibulum consequat. Curabitur feugiat eget sem vitae laoreet. Fusce porttitor finibus tellus, quis condimentum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vehicula malesuada magna at viverra. Fusce non est eget libero convallis fringilla suspendisse.`,
      `Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. Dignissim amet adipiscing massa integer.`,
    ],
  },
  {
    question: `What happens if I forget or lose my password?`,
    answers: [
      `Suspendisse viverra volutpat eros. Curabitur in scelerisque lacus, quis fringilla sem. Nunc rutrum vel magna et ullamcorper. Sed consectetur augue vitae ligula consectetur, eu dapibus justo molestie. Phasellus sit amet metus magna. Sed tincidunt tempus felis vitae commodo. Etiam lobortis justo in elit pretium, sit amet aliquet tellus euismod. Curabitur in purus sed turpis aliquet pretium. Nunc ut magna tempus, iaculis sem id, vulputate ipsum. Etiam fermentum malesuada quam, in tempus purus pulvinar at. Vestibulum auctor congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nunc dolor velit, interdum finibus bibendum vel, mattis a magna. Mauris mollis sapien ac mi aliquet varius. Proin nec est nibh. In hac habitasse platea dictumst. Nullam porta risus vitae lectus pellentesque interdum. Proin ac leo fermentum, volutpat odio ut, lacinia erat. Suspendisse potenti. Praesent vitae faucibus lectus. Sed tincidunt at ex id maximus. Morbi tristique ullamcorper velit, non cursus libero eleifend quis. Aliquam aliquam odio dui.`,
    ],
  },
]
