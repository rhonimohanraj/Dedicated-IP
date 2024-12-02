const icon1 = 'assets/img/landing/software-agency-3/icons/01.svg'
const icon2 = 'assets/img/landing/software-agency-3/icons/02.svg'
const icon3 = 'assets/img/landing/software-agency-3/icons/03.svg'
const icon4 = 'assets/img/landing/software-agency-3/icons/04.svg'

const industry1 = 'assets/img/landing/software-agency-3/industries/01.jpg'
const industry2 = 'assets/img/landing/software-agency-3/industries/02.jpg'
const industry3 = 'assets/img/landing/software-agency-3/industries/03.jpg'

const project1 = 'assets/img/landing/software-agency-3/projects/01.png'
const project2 = 'assets/img/landing/software-agency-3/projects/02.png'
const project3 = 'assets/img/landing/software-agency-3/projects/03.png'

const brand1SvgImg = 'assets/img/brands/01.svg'
const brand2SvgImg = 'assets/img/brands/02.svg'
const brand3SvgImg = 'assets/img/brands/03.svg'
const brand4SvgImg = 'assets/img/brands/04.svg'

const blog5 = 'assets/img/blog/05.jpg'
const blog7 = 'assets/img/blog/07.jpg'
const blog8 = 'assets/img/blog/08.jpg'

export type SolutionType = {
  icon?: string
  image?: string
  title: string
  description: string
}

export type IndustryType = {
  id: string
  image: string
  name: string
  about: string
}

export type ProjectType = {
  image: string
  category: string
  title: string
  description: string
  tags: string[]
}

export type BenefitType = {
  title: string
  description: string
}

export type BrandType = {
  image: string
  name?: string
  description?: string
}

export type BlogType = {
  image: string
  category: string
  time: string
  title: string
  description?: string
}

export const solutionData: SolutionType[] = [
  {
    image: icon1,
    title: 'Software Development',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.',
  },
  {
    image: icon2,
    title: 'App Development',
    description:
      'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.',
  },
  {
    image: icon3,
    title: 'Support & Maintenance',
    description:
      'Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.',
  },
  {
    image: icon4,
    title: 'Software QA & Testing',
    description:
      'Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.',
  },
]

export const industryData: IndustryType[] = [
  {
    id: 'industry-1',
    image: industry1,
    name: 'Finance and insurance',
    about:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat cursus enim.',
  },
  {
    id: 'industry-2',
    image: industry2,
    name: 'Startup and technology',
    about:
      'Interdum amet lobortis viverra et sapien aliquam nunc amet. Bibendum eu pellentesque sit risus leo commodo. Nibh dictum tellus lectus in risus eget cursus vitae nisi lacinia aliquam utuismod cras pellentesque.',
  },
  {
    id: 'industry-3',
    image: industry3,
    name: 'E-commerce',
    about:
      'Egestas nunc eleifend lacinia suspendisse bibendum ultrices risus. Facilisis neque eleifend diam orci id. Iaculis dignissim sed malesuada porttitor ac iaculis nullam donec sed volutpat quis vulputate sollicitudin tincidunt.',
  },
]

const categories: string[] = ['Mobile App', 'Landing Page', 'Web App']

export const featureProjectData: ProjectType[] = [
  {
    image: project1,
    category: categories[0],
    title: 'Task management app',
    description:
      'Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.',
    tags: [
      'Product Strategy',
      'Front end Development',
      'Systems Design',
      'Web Development',
    ],
  },
  {
    image: project2,
    category: categories[1],
    title: 'Landing page for electric scooters',
    description:
      'Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duistristique orci. Odio in pellentesque urna sit facilisi convallis vel tempus.',
    tags: ['Product Strategy', 'Systems Design', 'Web Development'],
  },
  {
    image: project3,
    category: categories[2],
    title: 'Сrypto market dashboard',
    description:
      'Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.',
    tags: ['Front end Development', 'Systems Design', 'Web Development'],
  },
]

export const benefitsData: BenefitType[] = [
  {
    title: 'Prototype in 24 hrs',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id Imperdiet elit integer elit.',
  },
  {
    title: 'MVP within two weeks',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    title: 'Kickstart development',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    title: '24/7 Tech support',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id Imperdiet elit integer elit.',
  },
]

export const brandData: BrandType[] = [
  {
    image: brand1SvgImg,
  },
  {
    image: brand2SvgImg,
  },
  {
    image: brand3SvgImg,
  },
  {
    image: brand4SvgImg,
  },
]

const blogCategories: string[] = ['Business', 'Digital', 'Development']

export const blogData: BlogType[] = [
  {
    image: blog5,
    category: blogCategories[0],
    time: '12 hours ago',
    title: 'How to check the website before releasing?',
  },
  {
    image: blog7,
    category: blogCategories[1],
    time: '11 hours ago',
    title: 'Inclusive Marketing: Why and How Does it Work?',
  },
  {
    image: blog8,
    category: blogCategories[1],
    time: '10 hours ago',
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
  },
]
