import { currentYear } from '@states/constants'

type LinkType = {
  name: string
}

export type AuthorType = {
  avatar: string
  name: string
}

export type BlogType = {
  image: string
  link: LinkType
  category: string
  date: string
  title: string
  description: string
  author: AuthorType
  like: number
  comment: number
  share: number
}

const avatar1 = 'assets/img/avatar/01.jpg'
const avatar5 = 'assets/img/avatar/05.jpg'
const avatar4 = 'assets/img/avatar/04.jpg'
const avatar2 = 'assets/img/avatar/02.jpg'

const blog1 = 'assets/img/blog/01.jpg'
const blog6 = 'assets/img/blog/06.jpg'
const blog5 = 'assets/img/blog/05.jpg'
const blog9 = 'assets/img/blog/09.jpg'
const blog3 = 'assets/img/blog/03.jpg'
const blog2 = 'assets/img/blog/02.jpg'

const authorData: AuthorType[] = [
  {
    avatar: avatar1,
    name: 'Jerome Bell',
  },
  {
    avatar: avatar5,
    name: ' Albert Flores',
  },
  {
    avatar: avatar4,
    name: 'Jane Cooper',
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards',
  },
  {
    avatar: avatar2,
    name: 'Ralph Edwards',
  },
  {
    avatar: avatar1,
    name: 'Jerome Bell',
  },
]

const categories: string[] = [
  'Processes & Tools',
  'Startups',
  'Digital',
  'Strategy',
  'Business',
]

export const blogData: BlogType[] = [
  {
    image: blog1,
    category: categories[0],
    date: 'Sep 3,' + currentYear,
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    link: {
      name: '/blog/single-post',
    },
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    author: authorData[0],
    like: 8,
    comment: 7,
    share: 4,
  },
  {
    image: blog6,
    category: categories[1],
    date: 'Sep 10,' + currentYear,
    title: 'How Agile is Your Forecasting Process?',
    link: {
      name: '/blog/single-post',
    },
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    author: authorData[1],
    like: 3,
    comment: 6,
    share: 0,
  },
  {
    image: blog5,
    category: categories[2],
    date: 'Oct 9,' + currentYear,
    title: 'Inclusive Marketing: Why and How Does it Work?',
    link: {
      name: '/blog/single-post',
    },
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    author: authorData[2],
    like: 5,
    comment: 0,
    share: 2,
  },
  {
    image: blog9,
    category: categories[3],
    date: 'Sep 3,' + currentYear,
    title: 'This Long-Awaited Technology May Finally Change the World',
    link: {
      name: '/blog/single-post',
    },
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    author: authorData[3],
    like: 8,
    comment: 7,
    share: 4,
  },
  {
    image: blog3,
    category: categories[4],
    date: 'Sep 16,' + currentYear,
    title: 'This Week in Search: New Limits and Exciting Features',
    link: {
      name: '/blog/single-post',
    },
    description:
      'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus at in lectus.',
    author: authorData[4],
    like: 5,
    comment: 8,
    share: 4,
  },
  {
    image: blog2,
    category: categories[2],
    date: 'Aug 19,' + currentYear,
    title: 'Why UX Design Matters and How it Affects Ranking',
    link: {
      name: '/blog/single-post',
    },
    description:
      'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. Adipiscing dui orci ac purus lacus.',
    author: authorData[5],
    like: 3,
    comment: 3,
    share: 9,
  },
]
