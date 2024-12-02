type LinkType = {
  name: string
}

type ChildLinkType = {
  title: string
  link: LinkType
}
type SocialLinkType = {
  icon: string
  label: string
}

type FooterLinkType = {
  label: string
  link?: string
}

type Footer3LinkType = {
  title: string
  isCollapsed: boolean
  children: ChildLinkType[]
}

export const footer2Items: FooterLinkType[] = [
  { label: 'Home', link: '/' },
  { label: 'Features' },
  { label: 'Overview' },
  { label: 'Blog', link: '/landings/blog' },
  { label: 'Contacts', link: '/contacts/v1' },
  { label: 'Account', link: '/account/details' },
]

export const footerSocialLinks: SocialLinkType[] = [
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'twitter', label: 'Twitter' },
  { icon: 'youtube', label: 'YouTube' },
]

export const footer3Links: Footer3LinkType[] = [
  {
    title: 'Tools and features',
    isCollapsed: true,
    children: [
      {
        title: 'Bill payment tracker',
        link: { name: '' },
      },
      {
        title: 'Budgeting goal tracker',
        link: { name: '' },
      },
      {
        title: 'Budget alerts',
        link: { name: '' },
      },
      {
        title: 'Categorize transactions',
        link: { name: '' },
      },
      {
        title: 'Investment tracker',
        link: { name: '' },
      },
      {
        title: 'Loan calculator',
        link: { name: '' },
      },
      {
        title: 'Investment calculator',
        link: { name: '' },
      },
    ],
  },
  {
    title: 'Resources',
    isCollapsed: true,
    children: [
      {
        title: 'About Silicon',
        link: { name: '' },
      },
      {
        title: 'Latest news and insights',
        link: { name: '' },
      },
      {
        title: 'Budgeting tips',
        link: { name: '' },
      },
      {
        title: 'Investing tips',
        link: { name: '' },
      },
      {
        title: 'Financial planning tips',
        link: { name: '' },
      },
      {
        title: 'Careers at Silicon',
        link: { name: '' },
      },
    ],
  },
  {
    title: 'Help center',
    isCollapsed: true,
    children: [
      {
        title: 'Help center',
        link: { name: '' },
      },
      {
        title: 'Community',
        link: { name: '' },
      },
      {
        title: 'Support chat',
        link: { name: '' },
      },
      {
        title: 'API documentation',
        link: { name: '' },
      },
      {
        title: 'Account & transactions',
        link: { name: '' },
      },
      {
        title: 'Login and password',
        link: { name: '' },
      },
    ],
  },
]

export const footer5Links: FooterLinkType[] = [
  { label: 'Home', link: '/' },
  { label: 'Features' },
  { label: 'Integrations' },
  { label: 'Our Clients' },
  { label: 'Blog', link: '/landings/blog' },
  { label: 'Terms & Conditions' },
  { label: 'Privacy Policy' },
]

export const footer6Link = [
  {
    title: 'About us',
    url: 'about/v1',
  },
  {
    title: 'Careers',
    badge: {
      text: 'Hiring',
      color: 'primary',
    },
  },
  {
    title: 'Contact us',
    url: 'contacts/v1',
  },
  {
    title: 'Terms of service',
  },
  {
    title: 'GitHub',
  },
  {
    title: 'Twitter',
  },
  {
    title: 'Telegram',
  },
]

export const aiModels = [
  {
    title: 'Speech recognition',
    description: 'Transforms voice speech into text',
    icon: 'message-dots',
    icon_color: 'warning',
  },
  {
    title: 'Files transcription',
    description: 'Converts different types of files',
    icon: 'file-find',
    icon_color: 'success',
  },
  {
    title: 'Code generation',
    description: 'Autocompletion and generation',
    icon: 'terminal',
    icon_color: 'info',
  },
  {
    title: 'Smart search',
    description: 'Responds to search queries',
    icon: 'search',
    icon_color: 'danger',
  },
]

export const resourseData = [
  {
    title: 'Documentation',
    description: 'API, knowledge base, tutorials',
    icon: 'bx bx-file',
    icon_color: '#007BFF',
  },
  {
    title: 'Help center',
    description: 'FAQs, articles, community forum',
    icon: 'bx bx-info-circle',
    icon_color: '#007BFF',
  },
  {
    title: 'Blog articles',
    description: 'Recent news and updates',
    icon: 'bx bx-edit',
    icon_color: '#007BFF',
  },
  {
    title: 'GitHub projects',
    description: 'Use our open source projects',
    icon: 'bx bxl-github',
    icon_color: '#007BFF',
  },
]

export const footerIntegrationData = [
  {
    icon: 'share-alt',
    title: 'Social networks',
    content: 'Facebook, Instagram, Twitter...',
  },
  {
    icon: 'cart-alt',
    title: 'E-commerce',
    content: 'Shopify, WordPress, Magento...',
  },
  {
    icon: 'calendar',
    title: 'Task / time management',
    content: 'Trello, Notion, Asana, Teams...',
  },
  {
    icon: 'envelope',
    title: 'Email / Chat apps',
    content: 'Gmail, MailChimp, Telegram...',
  },
  {
    icon: 'code-alt',
    title: 'Code editors',
    content: 'VS Code, Web Storm, Atom...',
  },
]

export const accountFooter = [
  { label: 'Home', link: '/' },
  { label: 'About', link: 'about/v1' },
  { label: 'Services' },
  { label: 'Our Clients' },
  { label: 'News' },
  { label: 'Terms & Conditions' },
  { label: 'Privacy Policy' },
]

export const accountSocialLink = [
  'Facebook',
  'LinkedIn',
  'Twitter',
  'Instagram',
]
