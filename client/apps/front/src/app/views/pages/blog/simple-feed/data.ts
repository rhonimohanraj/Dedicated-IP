import { currentYear } from '@states/constants'

type LinkType = {
  name: string
}

export type FeedType = {
  category: string
  time: string
  title: string
  description: string
  link?: LinkType
  like: number
  comment: number
  share: number
}

type BlogType = {
  date: string
  title: string
  description?: string
  link?: LinkType
  like: number
  comment: number
  share: number
}

export type BlogsType = {
  category: string
  blogs: BlogType[]
  color?: string
}

const categories: string[] = [
  'Tech',
  'Strategy',
  'Software',
  'Startups',
  'Technology',
  'Digital',
  'Marketing',
]

export const feedData: FeedType[] = [
  {
    category: categories[0],
    time: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    link: { name: '/blog/single-post' },
    like: 2,
    comment: 0,
    share: 3,
  },
  {
    category: categories[1],
    time: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    link: { name: '/blog/single-post' },
    like: 8,
    comment: 4,
    share: 2,
  },
  {
    category: categories[2],
    time: 'May 24,' + currentYear,
    title: 'What the Software Stock Slump Means for the Market',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    link: { name: '/blog/single-post' },
    like: 6,
    comment: 1,
    share: 5,
  },
  {
    category: categories[3],
    time: 'Sep 3,' + currentYear,
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.',
    link: { name: '/blog/single-post' },
    like: 8,
    comment: 7,
    share: 3,
  },
  {
    category: categories[4],
    time: 'Aug 19,' + currentYear,
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    link: { name: '/blog/single-post' },
    like: 5,
    comment: 3,
    share: 9,
  },
]

export const blogData: BlogsType[] = [
  {
    category: categories[5],
    color: 'bg-info',
    blogs: [
      {
        title: '5 Bad Landing Page Examples & How We Would Fix Them',
        link: { name: '/blog/single-post' },
        date: '12 hours ago',
        like: 8,
        comment: 4,
        share: 2,
      },
      {
        title: 'How Agile is Your Forecasting Process?',
        link: { name: '/blog/single-post' },
        date: 'Sep 3,' + currentYear,
        like: 4,
        comment: 1,
        share: 0,
      },
      {
        title: 'Inclusive Marketing: Why and How Does it Work?',
        link: { name: '/blog/single-post' },
        date: 'Oct 9,' + currentYear,
        like: 5,
        comment: 1,
        share: 2,
      },
    ],
  },
  {
    category: categories[4],
    color: 'bg-danger',
    blogs: [
      {
        title: 'This Long-Awaited Technology May Finally Change the World',
        link: { name: '/blog/single-post' },
        date: 'Sep 3,' + currentYear,
        like: 8,
        comment: 7,
        share: 3,
      },
      {
        title: 'This Week in Search: New Limits and Exciting Features',
        link: { name: '/blog/single-post' },
        date: 'Sep 16,' + currentYear,
        like: 4,
        comment: 7,
        share: 2,
      },
      {
        title: 'Why UX Design Matters and How it Affects Ranking',
        link: { name: '/blog/single-post' },
        date: 'Aug 19,' + currentYear,
        like: 2,
        comment: 0,
        share: 0,
      },
    ],
  },
  {
    category: categories[6],
    color: 'bg-warning  ',
    blogs: [
      {
        title: 'Five Effective Lead Generation Techniques For Your Business',
        link: { name: '/blog/single-post' },
        date: 'Sep 10,' + currentYear,
        like: 0,
        comment: 4,
        share: 1,
      },
      {
        title: 'Your Guide to Optimising A JavaScript-enabled Website',
        link: { name: '/blog/single-post' },
        date: '1 day ago',
        like: 3,
        comment: 4,
        share: 2,
      },
      {
        title:
          'A Study on Smartwatch Design Qualities and People’s Preferences',
        link: { name: '/blog/single-post' },
        date: '12 hours ago',
        like: 8,
        comment: 1,
        share: 3,
      },
    ],
  },
  {
    category: categories[3],
    color: 'bg-success',
    blogs: [
      {
        title: 'Does Brand Activism Impact Earning Potential?',
        link: { name: '/blog/single-post' },
        date: 'Sep 3,' + currentYear,
        like: 3,
        comment: 9,
        share: 1,
      },
      {
        title: 'The Ultimate Guide to On-Page SEO',
        link: { name: '/blog/single-post' },
        date: 'Aug 19,' + currentYear,
        like: 8,
        comment: 4,
        share: 2,
      },
      {
        title: 'Brand Analysis: Second Step to the Brand Identity',
        link: { name: '/blog/single-post' },
        date: 'May 24,' + currentYear,
        like: 5,
        comment: 0,
        share: 3,
      },
    ],
  },
]
