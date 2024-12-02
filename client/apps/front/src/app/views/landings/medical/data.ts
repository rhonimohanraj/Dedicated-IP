import { currentYear } from '@states/constants'

const doctorImg = 'assets/img/landing/medical/icons/doctor.svg'
const ambulanceImg = 'assets/img/landing/medical/icons/ambulance.svg'
const virusIMg = 'assets/img/landing/medical/icons/virus.svg'

const cardiologyImg = 'assets/img/landing/medical/services/cardiology.svg'
const scalpelImg = 'assets/img/landing/medical/services/scalpel.svg'
const xrayImg = 'assets/img/landing/medical/services/x-ray.svg'
const stethoscopeImg = 'assets/img/landing/medical/services/stethoscope.svg'
const lungsImg = 'assets/img/landing/medical/services/lungs.svg'
const toothImg = 'assets/img/landing/medical/services/tooth.svg'

const team16Img = 'assets/img/team/16.jpg'
const team17Img = 'assets/img/team/17.jpg'
const team18Img = 'assets/img/team/18.jpg'
const team19Img = 'assets/img/team/19.jpg'
const team20Img = 'assets/img/team/20.jpg'
const team21Img = 'assets/img/team/21.jpg'
const team22Img = 'assets/img/team/22.jpg'
const team23Img = 'assets/img/team/23.jpg'

const avatar30Img = 'assets/img/avatar/30.jpg'
const avatar32Img = 'assets/img/avatar/32.jpg'
const avatar31Img = 'assets/img/avatar/31.jpg'
const avatar34Img = 'assets/img/avatar/34.jpg'
const avatar35Img = 'assets/img/avatar/35.jpg'
const avatar33Img = 'assets/img/avatar/33.jpg'
const avatar37Img = 'assets/img/avatar/37.jpg'

const news1Img = 'assets/img/landing/medical/news/01.jpg'
const news2Img = 'assets/img/landing/medical/news/02.jpg'
const news3Img = 'assets/img/landing/medical/news/03.jpg'
const news4Img = 'assets/img/landing/medical/news/04.jpg'
const avatar36Img = 'assets/img/avatar/36.jpg'
const avatar38Img = 'assets/img/avatar/38.jpg'

const cta1Img = 'assets/img/landing/medical/cta/01.jpg'
const cta2Img = 'assets/img/landing/medical/cta/02.jpg'

type LinkType = {
  name: string
}

export type FeatureType = {
  id?: string
  image: string
  title: string
  description?: string
  linkLabel?: string
  link?: LinkType
}

export type ServiceType = {
  image: string
  title: string
  description: string
  link?: LinkType
}

export type TeamType = {
  image: string
  name: string
  expertise: string
  rating: number
  totalReview: number
}

export type AuthorType = {
  image: string
  name: string
  expertise?: string
}

export type TestimonialType = {
  comment: string
  rating: number
  author: AuthorType
}

export type NewsType = {
  image: string
  category: string
  title: string
  time: string
  description?: string
  author: AuthorType
  link?: LinkType
}

export const featureData: FeatureType[] = [
  {
    image: doctorImg,
    title: 'Find a Doctor',
    description: 'Search the right doctor by location and specialty.',
    linkLabel: 'See all doctors',
  },
  {
    image: ambulanceImg,
    title: 'Emergency Service',
    description: '(406) 555-0120',
    linkLabel: 'Contact us',
  },
  {
    image: virusIMg,
    title: 'COVID-19 Info',
    description: 'We offer quick COVID-19 testing by appointment.',
    linkLabel: 'Learn more',
  },
]

export const servicesData: ServiceType[] = [
  {
    image: cardiologyImg,
    title: 'Cardiology',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
    link: {
      name: 'landings.medical',
    },
  },
  {
    image: scalpelImg,
    title: 'Surgery',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
    link: {
      name: 'landings.medical',
    },
  },
  {
    image: xrayImg,
    title: 'Radiology',
    description: 'Faucibus cursus maecenas lorem cursus nibh.',
    link: {
      name: 'landings.medical',
    },
  },
  {
    image: stethoscopeImg,
    title: 'Family Medicine',
    description: 'Augue pulvinar justo, fermentum fames aliquam.',
    link: {
      name: 'landings.medical',
    },
  },
  {
    image: lungsImg,
    title: 'Pulmonary',
    description:
      'Ullamcorper in magna varius quisque enim tempor iaculis proin sed.',
    link: {
      name: 'landings.medical',
    },
  },
  {
    image: toothImg,
    title: 'Dental Care',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit facilisis dolor arcu.',
    link: {
      name: 'landings.medical',
    },
  },
]

export const ctaData: FeatureType[] = [
  {
    id: 'image-1',
    image: cta1Img,
    title:
      'New Service — Start Your Care <span class="text-success">Online</span> Now',
    description:
      'Morbi lacus vulputate mauris ut et nunc, tempor. Placerat augue eu amet feugiat mi sagittis velit. Sed suscipit nunc suspendisse morbi pharetra libero consectetur. Proin eros sollicitudin augue tempus. Aliquet id sit donec aliquam.',
  },
  {
    id: 'image-2',
    image: cta2Img,
    title:
      'Support Groups for <span class="text-danger">Depression</span> & Anxiety',
    description:
      'Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non. At integer consectetur eget nunc, fames. Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.',
  },
]

export const teamData: TeamType[] = [
  {
    image: team16Img,
    name: 'Dr. Ronald Richards',
    expertise: 'Neurosurgeon',
    totalReview: 19,
    rating: 5,
  },
  {
    image: team17Img,
    name: 'Dr. Esther Howard',
    expertise: 'Therapist',
    totalReview: 4,
    rating: 5,
  },
  {
    image: team18Img,
    name: 'Dr. Jerome Bell',
    expertise: 'Anesthesiologist',
    totalReview: 12,
    rating: 4,
  },
  {
    image: team19Img,
    name: 'Dr. Ralph Edwards',
    expertise: 'Surgeon',
    totalReview: 8,
    rating: 5,
  },
  {
    image: team20Img,
    name: 'Dr. Darrell Steward',
    expertise: 'Cardiologist',
    totalReview: 14,
    rating: 4,
  },
  {
    image: team21Img,
    name: 'Dr. Annette Black',
    expertise: 'Pediatrician',
    totalReview: 10,
    rating: 4,
  },
  {
    image: team22Img,
    name: 'Dr. Dianne Russell',
    expertise: 'Dentist',
    totalReview: 5,
    rating: 5,
  },
  {
    image: team23Img,
    name: 'Dr. Courtney Henry',
    expertise: 'Gynecologist',
    totalReview: 16,
    rating: 5,
  },
]

const authorData: AuthorType[] = [
  {
    image: avatar30Img,
    name: 'Fannie Summers',
  },
  {
    image: avatar32Img,
    name: 'Robert Fox',
  },
  {
    image: avatar31Img,
    name: 'Annette Black',
  },
  {
    image: avatar34Img,
    name: 'Jerome Bell',
  },
  {
    image: avatar35Img,
    name: 'Albert Flores',
  },
  {
    image: avatar33Img,
    name: 'Jenny Wilson',
  },
  {
    image: avatar37Img,
    name: 'Cameron Williamson',
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

const newsAuthorData: AuthorType[] = [
  {
    image: avatar36Img,
    name: 'Ralph Edwards',
    expertise: 'MBBS, MD Gynaecology',
  },
  {
    image: avatar37Img,
    name: 'Jenny Wilson',
    expertise: 'Ph.D. Physiology',
  },
  {
    image: avatar38Img,
    name: 'Albert Flores',
    expertise: 'M.Sc. Clinical Neuroscience',
  },
  {
    image: avatar37Img,
    name: 'Jenny Wilson',
    expertise: 'Ph.D. Physiology',
  },
]

const categories: string[] = [
  'Diseases',
  'Healthy Tips',
  'Psychology',
  'Health',
]

export const newsData: NewsType[] = [
  {
    image: news1Img,
    category: categories[0],
    time: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    author: newsAuthorData[0],
  },
  {
    image: news2Img,
    category: categories[1],
    time: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    author: newsAuthorData[1],
  },
  {
    image: news3Img,
    category: categories[2],
    time: 'Nov 24,' + currentYear,
    title: 'Empowering women to make their health a priority',
    author: newsAuthorData[2],
  },
  {
    image: news4Img,
    category: categories[3],
    time: 'Oct 13,' + currentYear,
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    author: newsAuthorData[3],
  },
]
