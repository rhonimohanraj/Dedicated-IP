import { currency } from '@states/constants'

const ecommerceImg = 'assets/img/landing/saas-5/categories/ecommerce.jpg'
const transportationImg =
  'assets/img/landing/saas-5/categories/transportation.jpg'
const marketingImg = 'assets/img/landing/saas-5/categories/marketing.jpg'
const roboticsImg = 'assets/img/landing/saas-5/categories/robotics.jpg'
const programmingImg = 'assets/img/landing/saas-5/categories/programming.jpg'
const envatoLightImg =
  'assets/img/landing/app-showcase-3/integrations/envato-color-light.svg'
const envatoDarkImg =
  'assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg'
const avatar54Img = 'assets/img/avatar/54.jpg'
const firefoxLightImg =
  'assets/img/landing/app-showcase-3/integrations/firefox-color-light.svg'
const firefoxDarkImg =
  'assets/img/landing/app-showcase-3/integrations/firefox-color-dark.svg'
const magentoLightImg =
  'assets/img/landing/app-showcase-3/integrations/magento-color-light.svg'
const magentoDarkImg =
  'assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg'
const avatar55Img = 'assets/img/avatar/55.jpg'
const pingdomLightImg =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg'
const pingdomDarkImg =
  'assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg'
const avatar56Img = 'assets/img/avatar/56.jpg'
const woocommerceLightImg =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg'
const woocommerceDarkImg =
  'assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg'
const shopifyLightImg =
  'assets/img/landing/app-showcase-3/integrations/shopify-color-light.svg'
const shopifyDarkImg =
  'assets/img/landing/app-showcase-3/integrations/shopify-color-dark.svg'
const laravelImg =
  'assets/img/landing/app-showcase-3/integrations/laravel-color.svg'
const viteLightImg =
  'assets/img/landing/app-showcase-3/integrations/vite-color-light.svg'
const viteDarkImg =
  'assets/img/landing/app-showcase-3/integrations/vite-color-dark.svg'
const angularLightImg =
  'assets/img/landing/app-showcase-3/integrations/angular-color-light.svg'
const angularDarkImg =
  'assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg'

export type categoriesType = {
  head: string
  description: string
  image: string
}

type ImageType = {
  light: string
  dark: string
}

export type AuthorType = {
  image?: string
  name: string
  position: string
}

export type TestimonialType = {
  image: ImageType
  feedback: string
  author: AuthorType
}

export type PricingType = {
  head: string
  title1: string
  description1?: string
  title2: string
  description2: string
}

export type FooterType = {
  icon: string
  title: string
  content: string
}

export const categoriesData: categoriesType[] = [
  {
    head: 'E-commerce',
    description: 'Order processing, price suggestions, user research',
    image: ecommerceImg,
  },
  {
    head: 'Transportation',
    description: 'Itinerary planning, freight pricing culculations, etc.',
    image: transportationImg,
  },
  {
    head: 'Marketing',
    description: 'Market research, data visualization, user testing',
    image: marketingImg,
  },
  {
    head: 'Robotics',
    description: 'Enhancing robot learning, improve robotic precision',
    image: roboticsImg,
  },
  {
    head: 'Programming',
    description: 'Code generation, code debugging and optimization',
    image: programmingImg,
  },
]

const authorData: AuthorType[] = [
  {
    image: avatar54Img,
    name: 'Emma Johnson',
    position: 'CEO, Co-Founder',
  },
  {
    name: 'Robert Thompson',
    position: 'Chief Information Officer',
  },
  {
    image: avatar55Img,
    name: 'Christopher Davis',
    position: 'Network Administrator',
  },
  {
    image: avatar56Img,
    name: 'Samantha Grace',
    position: 'Data Analyst',
  },
  {
    name: 'William Matthews',
    position: 'Software Developer',
  },
  {
    name: 'Olivia Rodriguez',
    position: 'Human Resources',
  },
  {
    name: 'Benjamin Smith',
    position: 'Project Manager',
  },
  {
    name: 'Abigail Collins',
    position: 'Chief Technology Officer',
  },
  {
    name: 'Elijah Brown',
    position: 'Project Manager',
  },
]

export const testimonialData: TestimonialType[] = [
  {
    image: {
      light: envatoLightImg,
      dark: envatoDarkImg,
    },
    feedback: `Streamline your workflow and save valuable time with this SaaS platform\'s powerful AI models, which takes care of the heavy lifting and delivers top-notch results.`,
    author: authorData[0],
  },
  {
    image: {
      light: firefoxLightImg,
      dark: firefoxDarkImg,
    },
    feedback: `Transform your business with this SaaS platform's outstanding AI models API, which delivers unparalleled efficiency, great service, and outstanding results.`,
    author: authorData[1],
  },
  {
    image: {
      light: magentoLightImg,
      dark: magentoDarkImg,
    },
    feedback: `Differentiate your app from the competition with this SaaS platform's outstanding performance and exceptional API for implementing AI models into your application.`,
    author: authorData[2],
  },
  {
    image: {
      light: pingdomLightImg,
      dark: pingdomDarkImg,
    },
    feedback: `Experience game-changing AI models that are accessible and user-friendly, thanks to this exceptional SaaS platform that offers an API for seamless integration.`,
    author: authorData[3],
  },
  {
    image: {
      light: woocommerceLightImg,
      dark: woocommerceDarkImg,
    },
    feedback: `This SaaS platform offers an API for integrating AI models into your app with ease, delivering impressive results and enabling you to take your business to the next level.`,
    author: authorData[4],
  },
  {
    image: {
      light: shopifyLightImg,
      dark: shopifyDarkImg,
    },
    feedback: `Get ahead of the competition with this SaaS platform's AI models API, which effortlessly automates processes and delivers exceptional service to ensure your success.`,
    author: authorData[5],
  },
  {
    image: {
      light: laravelImg,
      dark: laravelImg,
    },
    feedback: `Implementing AI models has never been easier or more reliable, thanks to this SaaS platform's seamless API integration and accurate, dependable results.`,
    author: authorData[6],
  },
  {
    image: {
      light: viteLightImg,
      dark: viteDarkImg,
    },
    feedback: `Stay ahead of the curve and leverage cutting-edge technology with this SaaS platform's unparalleled performance and impressive results.`,
    author: authorData[7],
  },
  {
    image: {
      light: angularLightImg,
      dark: angularDarkImg,
    },
    feedback: `Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform, featuring an API that provides excellent support and streamlines your processes.`,
    author: authorData[8],
  },
]

export const pricingData: PricingType[] = [
  {
    head: 'Data Models Infrastructure Cost',
    title1: 'Included',
    description1: 'Cloud hosted AI/ML capacities',
    title2: 'From ' + currency + '10k to' + currency + '50k',
    description2: 'per month',
  },
  {
    head: 'Engineering Cost',
    title1: 'Included',
    description1: 'with our premium plans',
    title2: 'From ' + currency + '25k to' + currency + '30k',
    description2: 'per engineer per month',
  },
  {
    head: 'Time to Implement',
    title1: 'Get started in minutes',
    title2: 'Average 6-9 months',
    description2: 'depends on team qualification',
  },
  {
    head: 'Maintenance & Operational Cost',
    title1: 'Included',
    description1: 'with our premium plans',
    title2: 'Average ' + currency + '20k',
    description2: 'per engineer per month',
  },
]

export const footerIntegrationData: FooterType[] = [
  {
    icon: 'bx-share-alt',
    title: 'Social networks',
    content: 'Facebook, Instagram, Twitter...',
  },
  {
    icon: 'bx-cart-alt',
    title: 'E-commerce',
    content: 'Shopify, WordPress, Magento...',
  },
  {
    icon: 'bx-calendar',
    title: 'Task / time management',
    content: 'Trello, Notion, Asana, Teams...',
  },
  {
    icon: 'bx-envelope',
    title: 'Email / Chat apps',
    content: 'Gmail, MailChimp, Telegram...',
  },
  {
    icon: 'bx-code-alt',
    title: 'Code editors',
    content: 'VS Code, Web Storm, Atom...',
  },
]

export const footerResourcesData: FooterType[] = [
  {
    icon: 'bx-file',
    title: 'Documentation',
    content: 'API, knowledge base, tutorials',
  },
  {
    icon: 'bx-info-circle',
    title: 'Help center',
    content: 'FAQs, articles, community forum',
  },
  {
    icon: 'bx-edit',
    title: 'Blog articles',
    content: 'Recent news and updates',
  },
  {
    icon: 'bxl-github',
    title: 'GitHub projects',
    content: 'Use our open source projects',
  },
]

export const footerAimodelData: FooterType[] = [
  {
    icon: 'bx-message-dots', //set svg
    title: 'Generative model',
    content: 'Generation of texts and images',
  },
  {
    icon: 'bx-message-dots',
    title: 'Speech recognition',
    content: 'Transforms voice speech into text',
  },
  {
    icon: 'bx-file-find',
    title: 'Files transcription',
    content: 'Converts different types of files',
  },
  {
    icon: 'bx-terminal',
    title: 'Code generation',
    content: 'Autocompletion and generation',
  },
  {
    icon: 'bx-search',
    title: 'Smart search',
    content: 'Responds to search queries',
  },
]
