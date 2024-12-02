import { currentYear } from '@states/constants'

const blog1 = 'assets/img/blog/01.jpg'
const blog2 = 'assets/img/blog/02.jpg'
const blog3 = 'assets/img/blog/03.jpg'
const blog5 = 'assets/img/blog/05.jpg'

export type BlogType = {
  id: number
  card: boolean
  image?: string
  variant: string
  badge: string
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
    card: true,
    image: blog5,
    title: 'Inclusive Marketing: Why and How Does it Work?',
    badge: badge[0],
    variant: 'info',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent.',
    date: 'Oct 9,' + currentYear,
    like: 5,
    comment: 0,
    share: 2,
  },
  {
    id: 2,
    card: false,
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    badge: badge[1],
    variant: 'warning',
    description:
      'Dignissim varius vehicula sagittis, cursus purus, congue. Tempor aliquam utridiculus dolor nibh felis. Feugiat in ut neque pellentesque. Urna adipiscingsodales pretium, pretium ornare enim lacus, ultrices amet. Enim in facilisis sitscelerisque sit.',
    date: 'Sep 3,' + currentYear,
    like: 8,
    comment: 7,
    share: 4,
  },
  {
    id: 3,
    card: true,
    image: blog2,
    title: 'Why UX Design Matters and How it Affects Ranking',
    badge: badge[2],
    variant: 'danger',
    description:
      'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.',
    date: 'Sep 16,' + currentYear,
    like: 5,
    comment: 3,
    share: 9,
  },
  {
    id: 4,
    card: true,
    image: blog1,
    title: 'Why UX Design Matters and How it Affects Ranking',
    badge: badge[3],
    variant: 'success',
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
    image: blog3,
    title: 'This Week in Search: New Limits and Exciting Features',
    badge: badge[0],
    variant: 'info',
    description:
      'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus.',
    date: 'Sep 16,' + currentYear,
    like: 5,
    comment: 7,
    share: 4,
  },
  {
    id: 6,
    card: false,
    title: 'This Long-Awaited Technology May Finally Change the World',
    badge: badge[1],
    variant: 'warning',
    description:
      'Nunc, enim donec venenatis quis amet, magna vulputate rhoncus. Interdum lacus, nam elementum, cursus felis cras eros vel tincidunt. Felis nunc rhoncus quis curabitur facilisi. Odio cursus in vel et pretium. Ornare interdum in cras nibh lectus fusce. Neque, donec nunc, tellus, bibendum. Id euismod urna diam dolor lobortis consectetu.',
    date: 'Sep 3,' + currentYear,
    like: 0,
    comment: 1,
    share: 2,
  },
]
