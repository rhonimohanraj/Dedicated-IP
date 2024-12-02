const ridescooterImg = 'assets/img/landing/startup/icons/riding-scooter.svg'
const diamondImg = 'assets/img/landing/startup/icons/diamond.svg'
const planetImg = 'assets/img/landing/startup/icons/planet.svg'
const step1Img = 'assets/img/landing/startup/steps/01.svg'
const step2Img = 'assets/img/landing/startup/steps/02.svg'
const step3Img = 'assets/img/landing/startup/steps/03.svg'
const step4Img = 'assets/img/landing/startup/steps/04.svg'
const mobileImg = 'assets/img/landing/startup/icons/mobile.svg'
const handImg = 'assets/img/landing/startup/icons/hand.svg'
const smileyImg = 'assets/img/landing/startup/icons/smiley.svg'
const scooterImg = 'assets/img/landing/startup/icons/scooter.svg'

export type FeatureType = {
  image: string
  title: string
  description: string
}

export type ProcessType = {
  image: string
  title: string
  description: string
}

export type BenefitType = {
  image: string
  title: string
  description: string
}

export const featureData: FeatureType[] = [
  {
    image: ridescooterImg,
    title: 'Freedom of movement',
    description:
      'Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.',
  },
  {
    image: diamondImg,
    title: 'Quality & style',
    description:
      'Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.',
  },
  {
    image: planetImg,
    title: 'Cities made for living',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.',
  },
]

export const processData: ProcessType[] = [
  {
    image: step1Img,
    title: 'Find a scooter nearby',
    description:
      'Use the map in the app to find your closest scooter. You can also book it 40 minutes in advance.',
  },
  {
    image: step2Img,
    title: 'Start the ride',
    description:
      'To start your ride, scan the QR code with your app and tap on "Start ride". Hit the throttle to go and pull the brakes to slow.',
  },
  {
    image: step3Img,
    title: 'Enjoy your ride!',
    description: `When you're riding past traffic, be sure to follow all street signs and laws. Please ride safely and be mindful of where you park. Make sure you're wearing a helmet.`,
  },
  {
    image: step4Img,
    title: 'Park carefully',
    description:
      'After your ride, park the scooter safely and out of the way of pedestrian and car traffic - your community will appreciate it. Finally lock it by tapping on "End ride".',
  },
]

export const benefitData: BenefitType[] = [
  {
    image: mobileImg,
    title: 'Trial app',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo venenatis.',
  },
  {
    image: scooterImg,
    title: 'High-end scooters',
    description:
      'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    image: handImg,
    title: 'Lowest price for riding',
    description:
      'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    image: smileyImg,
    title: 'Happiness guarantee',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris pretium.',
  },
]
