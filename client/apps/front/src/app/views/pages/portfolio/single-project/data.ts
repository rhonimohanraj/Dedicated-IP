const relate1 = 'assets/img/portfolio/single/related01.jpg'
const relate2 = 'assets/img/portfolio/single/related02.jpg'
const relate3 = 'assets/img/portfolio/single/related03.jpg'

type LinkType = {
  name: string
}

type ProjectType = {
  image: string
  title: string
  description?: string
  tags: string[]
  link?: LinkType
}

export const projectData: ProjectType[] = [
  {
    image: relate1,
    title: '3D Shape Illustration',
    tags: ['3D Design / Illustration / Art'],
  },
  {
    image: relate2,
    title: 'Mobile Banking App',
    tags: ['Mobile App Design / UI / UX'],
  },
  {
    image: relate3,
    title: 'Big Blue Whale Shape',
    tags: ['3D Design / Graphic Design / Art'],
  },
]
