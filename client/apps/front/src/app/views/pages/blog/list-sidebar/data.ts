import { currentYear } from '@states/constants'

const img5 = 'img/blog/05.jpg'
const img3 = 'img/blog/03.jpg'
const img2 = 'img/blog/02.jpg'
const img1 = 'img/blog/01.jpg'

export type BlogType = {
  id: number
  card: boolean
  image?: string
  badge: string
  variant: string
  title: string
  description: string
  date: string
  like: number
  comment: number
  share: number
}

const badge: string[] = ['Digital', 'Business', 'Technology', 'Startups']

export const blogData: BlogType[] = [
  {
    id: 1,
    card: false,
    image: img5,
    title: 'Inclusive Marketing: Why and How Does it Work?',
    badge: badge[0],
    variant: 'info',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.',
    date: 'Oct 9, ' + currentYear,
    like: 5,
    comment: 0,
    share: 2,
  },
  {
    id: 2,
    card: true,
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    badge: badge[1],
    variant: 'warning',
    description:
      'Sed parturient in faucibus porttitor morbi rutrum in. Amet fermentum, scelerisque suspendisse nisi faucibus quis lacus. Convallis eget pretium leo, egestas nisl, congue quam et ultrices. Pharetra, elementum pulvinar massa mattis sapien, sit. Id sollicitudin viverra morbi vitae ac tempor bibendum pulvinar vel. Integer non mattis ultrices est morbi ullamcorper scelerisque hac mi. Id semper ut dui sit magna.',
    date: 'Sep 3, ' + currentYear,
    like: 8,
    comment: 7,
    share: 3,
  },
  {
    id: 3,
    card: false,
    image: img3,
    title: 'This Week in Search: New Limits and Exciting Features',
    badge: badge[2],
    variant: 'danger',
    description:
      'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus.',
    date: 'Sep 16, ' + currentYear,
    like: 5,
    comment: 7,
    share: 4,
  },
  {
    id: 4,
    card: true,
    title: 'How Agile is Your Forecasting Process?',
    badge: badge[3],
    variant: 'success',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    date: 'Sep 10, ' + currentYear,
    like: 3,
    comment: 6,
    share: 0,
  },
  {
    id: 5,
    card: false,
    image: img2,
    title: 'Why UX Design Matters and How it Affects Ranking',
    badge: badge[1],
    variant: 'warning',
    description:
      'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.',
    date: 'Aug 19,' + currentYear,
    like: 5,
    comment: 3,
    share: 9,
  },
  {
    id: 5,
    card: true,
    title: 'This Long-Awaited Technology May Finally Change the World',
    badge: badge[0],
    variant: 'info',
    description:
      'Nunc, enim donec venenatis quis amet, magna vulputate rhoncus. Interdum lacus, nam elementum, cursus felis cras eros vel tincidunt. Felis nunc rhoncus quis curabitur facilisi. Odio cursus in vel et pretium. Ornare interdum in cras nibh lectus fusce. Neque, donec nunc, tellus, bibendum. Id euismod urna diam dolor lobortis consectetu.',
    date: 'Sep 3,' + currentYear,
    like: 0,
    comment: 1,
    share: 2,
  },
  {
    id: 6,
    card: false,
    image: img1,
    title: '5 Bad Landing Page Examples &amp; How We Would Fix Them',
    badge: badge[3],
    variant: 'success',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.',
    date: 'Sep 3,' + currentYear,
    like: 8,
    comment: 7,
    share: 3,
  },
]
