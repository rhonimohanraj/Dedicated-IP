import { currentYear } from '@states/constants'

const collection1 = 'assets/img/account/collection01.jpg'
const collection2 = 'assets/img/account/collection02.jpg'
const collection3 = 'assets/img/account/collection03.jpg'

type LinkType = {
  name: string
}

export type CollectionType = {
  image: string
  date: string
  title: string
  description?: string
  tags: string[]
  route?: LinkType
}

const tags: string[] = [
  'NFT',
  'Graphic Design',
  'Motion Design',
  'Art',
  'Identity',
  'Mobile App Design',
]

export const collectionData: CollectionType[] = [
  {
    image: collection1,
    date: 'Nov 30,' + currentYear,
    title: '3D Shape Illustration',
    tags: [tags[0], tags[1], tags[2]],
  },
  {
    image: collection2,
    date: 'Oct 18,' + currentYear,
    title: 'Scene of Sunglasses & Headphone   on Human Head',
    tags: [tags[1], tags[3], tags[4], tags[2]],
  },
  {
    image: collection3,
    date: 'Aug 05,' + currentYear,
    title: 'Mannequin Hands Holding Phone',
    tags: [tags[0], tags[5], tags[1], tags[3]],
  },
]
