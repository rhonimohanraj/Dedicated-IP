import { currentYear } from '@states/constants'

const avatar19 = 'assets/img/avatar/19.jpg'
const avatar20 = 'assets/img/avatar/20.jpg'
const avatar21 = 'assets/img/avatar/21.jpg'
const avatar22 = 'assets/img/avatar/22.jpg'
const avatar23 = 'assets/img/avatar/23.jpg'
const avatar24 = 'assets/img/avatar/24.jpg'
const avatar25 = 'assets/img/avatar/25.jpg'
const avatar26 = 'assets/img/avatar/26.jpg'
const avatar27 = 'assets/img/avatar/27.jpg'
const avatar28 = 'assets/img/avatar/28.jpg'

const avatar29 = 'assets/img/avatar/29.jpg'

export type UserType = {
  image: string
  name: string
}

export type ContactType = {
  id?: number
  user: UserType
  lastSeen: string
  lastMessage?: string
  isTyping: boolean
  isActive: boolean
  currentlyChatting: boolean
}

type ChatType = {
  user: UserType
  message: string[]
  time: string
  isSender: boolean
}

export type ChatDataType = {
  date: string
  chat: ChatType[]
}

const userData = [
  {
    image: avatar19,
    name: 'Devon Lane',
  },
  {
    image: avatar20,
    name: 'Albert Flores',
  },
  {
    image: avatar21,
    name: 'Bessie Cooper',
  },
  {
    image: avatar22,
    name: 'Ronald Richards',
  },
  {
    image: avatar23,
    name: 'Robert Fox',
  },
  {
    image: avatar24,
    name: 'Jerome Bell',
  },
  {
    image: avatar25,
    name: 'Kathryn Murphy',
  },
  {
    image: avatar26,
    name: 'Dianne Russell',
  },
  {
    image: avatar27,
    name: 'Cody Fisher',
  },
  {
    image: avatar28,
    name: 'Darlene Robertson',
  },
  {
    image: avatar29,
    name: 'John Doe',
  },
]
export const contactData: ContactType[] = [
  {
    id: 1,
    user: userData[0],
    lastSeen: '18:02',
    lastMessage: 'Dolor, quam habitant...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 2,
    user: userData[1],
    lastSeen: '17:33',
    lastMessage: 'You are welcome 😊',
    isTyping: false,
    isActive: true,
    currentlyChatting: true,
  },
  {
    id: 3,
    user: userData[2],
    lastSeen: '12:04',
    isTyping: true,
    isActive: true,
    currentlyChatting: false,
  },
  {
    id: 4,
    user: userData[3],
    lastSeen: '08:00',
    lastMessage: 'Ok 👌',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 5,
    user: userData[4],
    lastSeen: '14 Nov',
    lastMessage: 'Praesent ut mi.',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 6,
    user: userData[5],
    lastSeen: '8 Oct',
    lastMessage: 'In pretium a eget nunc...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 7,
    user: userData[6],
    lastSeen: '16 Sep',
    lastMessage: 'Tempor amet?',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 8,
    user: userData[7],
    lastSeen: '27 Aug',
    lastMessage: 'Vehicula accumsan leo.',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 9,
    user: userData[8],
    lastSeen: '18 Aug',
    lastMessage: 'Erat cum amet viverra...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
  {
    id: 10,
    user: userData[9],
    lastSeen: '13 Jul',
    lastMessage: 'Orci convallis eget sit...',
    isTyping: false,
    isActive: false,
    currentlyChatting: false,
  },
]

export const chatData: ChatDataType[] = [
  {
    date: 'November 27, ' + currentYear,
    chat: [
      {
        user: userData[1],
        message: [
          'Tellus, ipsum, commodo, dui ac. Ultrices mi arcu orci aliquam et.',
        ],
        time: '09:04 am',
        isSender: false,
      },
      {
        user: userData[10],
        message: ['Orci convallis eget sit ultricies rutrum.'],
        time: '10:36 am',
        isSender: true,
      },
      {
        user: userData[1],
        message: [
          'Blandit tempus, erat cum amet viverra pharetra, morbi. Vivamus pretium tristique amet, nulla aenean sed blandit?',
        ],
        time: '14:48 pm',
        isSender: false,
      },
      {
        user: userData[10],
        message: [
          'Vel enim lacus, ac, fermentum, id. Aliquet faucibus pellentesque egestas.',
          'Thank you!',
        ],
        time: '16:29 pm',
        isSender: true,
      },
    ],
  },
  {
    date: 'November 28, ' + currentYear,
    chat: [
      {
        user: userData[1],
        message: ['You are welcome 😊'],
        time: '17:33 pm',
        isSender: false,
      },
    ],
  },
]
