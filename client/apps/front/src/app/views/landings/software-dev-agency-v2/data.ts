const clutch = 'assets/img/landing/software-agency-2/awards/clutch.png'
const goodFirms = 'assets/img/landing/software-agency-2/awards/good-firms.png'
const productHunt =
  'assets/img/landing/software-agency-2/awards/product-hunt.png'
const awwwards = 'assets/img/landing/software-agency-2/awards/awwwards.png'
const caseStudy1 = 'assets/img/landing/software-agency-2/case-studies/01.jpg'
const caseStudy2 = 'assets/img/landing/software-agency-2/case-studies/02.jpg'
const avatar48 = 'assets/img/avatar/48.jpg'
const avatar49 = 'assets/img/avatar/49.jpg'
const avatar50 = 'assets/img/avatar/50.jpg'

export type AwardType = {
  icon?: string
  image?: string
  title?: string
  description?: string
}

export type CaseStudyType = {
  image: string
  title: string
  description: string
  url?: string
}

export type UserType = {
  image?: string
  name: string
  role: string
}

export type ReviewType = {
  title: string
  description: string
  rating: number
  user: UserType
}

export const awardData: AwardType[] = [
  {
    image: clutch,
    description:
      'Phasellus eu ex ultrices, facilisis ex at aliquet felis rutrum ante',
  },
  {
    image: goodFirms,
    description: 'Nulla pellentesque justo enim, in elementum turpis tincidunt',
  },
  {
    image: productHunt,
    description:
      'Donec pulvinar iaculis ex laoreet vestibulum interdum viverra',
  },
  {
    image: awwwards,
    description: 'Cras ullamcorper laoreet erat suscipit. Sed id lacus blandit',
  },
]

export const caseStudyData: CaseStudyType[] = [
  {
    image: caseStudy1,
    title: 'Travelers Portal with Smart Search',
    description:
      'Aenean sed mi ut erat venenatis imperdiet. Mauris sed turpis ac elit ultricies rhoncus id et magna donec euismod interdum risus.',
  },
  {
    image: caseStudy2,
    title: 'Fintech App for Financial Management',
    description:
      'Nullam semper enim quis vulputate mollis. Donec ultrices elementum mauris, ac porttitor mi cursus eget vestibulum tellus sodales.',
  },
]

const userData: UserType[] = [
  {
    image: avatar48,
    name: 'Jack Taylor',
    role: 'Co-founder of Lorem Company',
  },
  {
    image: avatar49,
    name: 'Annette Black',
    role: 'VP of Strategy, Stretto Inc.',
  },
  {
    image: avatar50,
    name: 'Mel Gibson',
    role: 'Founder & CEO, Uber',
  },
]

export const clientReviewData: ReviewType[] = [
  {
    title: 'Cool and experienced team to develop your web application.',
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa volutpat pretium.',
    rating: 5,
    user: userData[0],
  },
  {
    title: 'Efficient and Innovative: Our Experience with Silicon.',
    description:
      'Vero minima sequi adipisci architecto dolorum, error animi delectus dicta perferendis! A, exercitationem soluta quam reprehenderit rem animi amet eligendi voluptates consequatur ipsam pariatur necessitatibus laboriosam in illo eos molestias ex explicabo eaque assumenda voluptatibus ducimus consectetur perferendis! Architecto molestias, rerum reprehenderit amet sunt natus fuga blanditiis suscipit.',
    rating: 4,
    user: userData[1],
  },
  {
    title: 'Exceptional Service and Quality Results.',
    description:
      'In quas adipisci assumenda voluptas eveniet obcaecati est quis sapiente voluptatum iste porro blanditiis debitis ut beatae, fugit quidem fugiat eum molestias? Dolore magni harum officia tempore eos sapiente. Voluptatibus pariatur omnis libero unde quasi optio, tenetur reprehenderit tempore necessitatibus harum mollitia qui. Maxime, quas tempore. Sunt quaerat porro facere blanditiis voluptatibus.',
    rating: 5,
    user: userData[2],
  },
]
