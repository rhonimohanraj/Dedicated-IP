type GridType = {
  image: string
  title: string
  tags: string[]
  odd: boolean
  meta?: {
    text?: string
  }
}

const grid1 = 'assets/img/portfolio/grid/01.jpg'
const grid2 = 'assets/img/portfolio/grid/02.jpg'
const grid3 = 'assets/img/portfolio/grid/03.jpg'
const grid4 = 'assets/img/portfolio/grid/04.jpg'
const grid5 = 'assets/img/portfolio/grid/05.jpg'
const grid6 = 'assets/img/portfolio/grid/06.jpg'

const tags: string[] = [
  '3D Render',
  'Graphic Design',
  'Motion Design',
  'NFT',
  'Art',
  'Identity',
  '3D',
  'Illustration',
]
export const gridData: GridType[] = [
  {
    image: grid1,
    title: 'Astronaut & Flashing Neon Lights',
    tags: [tags[0], tags[1], tags[2]],
    odd: true,
    meta: {
      text: '3D Render / Graphic Design / Motion Design',
    },
  },
  {
    image: grid2,
    title: 'Scene of Sunglasses & Headphone on Human Head',
    tags: [tags[3], tags[1], tags[4], tags[5], tags[2]],
    odd: false,
    meta: {
      text: 'NFT / Graphic Design / Art / Identity /Motion Design',
    },
  },
  {
    image: grid3,
    title: 'Plaster Antique Sculpture in a Pop Art Style',
    tags: [tags[3], tags[1], tags[4], tags[6]],
    odd: false,
    meta: {
      text: 'NFT / Graphic Design / Art / 3D',
    },
  },
  {
    image: grid4,
    title: 'Big Blue Whale Shape',
    tags: [tags[6], tags[1], tags[4]],
    odd: true,
    meta: {
      text: '3D / Graphic Design / Art',
    },
  },
  {
    image: grid5,
    title: '3D Shape Illustration',
    tags: [tags[6], tags[7], tags[4]],
    odd: true,
    meta: {
      text: '3D / Illustration / Art',
    },
  },
  {
    image: grid6,
    title: 'Mannequin Hands Holding Phone',
    tags: [tags[3], tags[1], tags[4], tags[6]],
    odd: false,
    meta: {
      text: 'NFT / Graphic Design / Art / 3D',
    },
  },
]
