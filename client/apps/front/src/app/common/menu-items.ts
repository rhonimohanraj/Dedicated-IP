export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  hasImage?: boolean
  isHeading?: boolean
  isNew?: boolean
  url?: string
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'landings',
    label: 'Landings',
    isTitle: true,
    hasImage: true,
    children: [
      {
        key: 'template-intro-page',
        label: 'Template Intro Page',
        url: '/',
        parentKey: 'landings',
      },
      {
        key: 'mobile-showcase-1',
        label: 'Mobile App Showcase V.1',
        url: '/landings/mobile-showcase-1',
        parentKey: 'landings',
      },
      {
        key: 'mobile-showcase-2',
        label: 'Mobile App Showcase V.2',
        url: '/landings/mobile-showcase-2',
        parentKey: 'landings',
      },
      {
        key: 'mobile-showcase-3',
        label: 'Mobile App Showcase V.3',
        isNew: true,
        url: '/landings/mobile-showcase-3',
        parentKey: 'landings',
      },
      {
        key: 'product-landing',
        label: 'Product Landing',
        url: '/landings/product',
        parentKey: 'landings',
      },
      {
        key: 'saas-1',
        label: 'SaaS v.1',
        url: '/landings/saas-1',
        parentKey: 'landings',
      },
      {
        key: 'saas-2',
        label: 'SaaS v.2',
        url: '/landings/saas-2',
        parentKey: 'landings',
      },
      {
        key: 'saas-3',
        label: 'SaaS v.3',
        url: '/landings/saas-3',
        parentKey: 'landings',
      },
      {
        key: 'saas-4',
        label: 'SaaS v.4',
        url: '/landings/saas-4',
        parentKey: 'landings',
      },
      {
        key: 'saas-5',
        label: 'SaaS v.5',
        isNew: true,
        url: '/landings/saas-5',
        parentKey: 'landings',
      },
      {
        key: 'startup',
        label: 'Startup',
        url: '/landings/startup',
        parentKey: 'landings',
      },
      {
        key: 'financial-consulting',
        label: 'Financial Consulting',
        url: '/landings/financial-consulting',
        parentKey: 'landings',
      },
      {
        key: 'online-courses',
        label: 'Online Courses',
        url: '/landings/online-courses',
        parentKey: 'landings',
      },
      {
        key: 'medical',
        label: 'Medical',
        url: '/landings/medical',
        parentKey: 'landings',
      },
      {
        key: 'software-dev-agency-1',
        label: 'Software Dev Agency v.1',
        url: '/landings/software-dev-agency-1',
        parentKey: 'landings',
      },
      {
        key: 'software-dev-agency-2',
        label: 'Software Dev Agency v.2',
        url: '/landings/software-dev-agency-2',
        parentKey: 'landings',
      },
      {
        key: 'software-dev-agency-3',
        label: 'Software Dev Agency v.3',
        url: '/landings/software-dev-agency-3',
        parentKey: 'landings',
      },
      {
        key: 'conference',
        label: 'Conference',
        url: '/landings/conference',
        parentKey: 'landings',
      },
      {
        key: 'digital-agency',
        label: 'Digital Agency',
        url: '/landings/digital-agency',
        parentKey: 'landings',
      },
      {
        key: 'blog-homepage',
        label: 'Blog Homepage',
        url: '/landings/blog',
        parentKey: 'landings',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-about',
        label: 'About',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'about-1',
        url: '/about/v1',
        parentKey: 'pages',
        label: 'About V.1',
      },
      {
        key: 'about-2',
        url: '/about/v2',
        parentKey: 'pages',
        label: 'About V.2',
      },
      {
        key: 'about-3',
        url: '/about/v3',
        parentKey: 'pages',
        label: 'About V.3',
      },

      {
        key: 'pages-blog',
        label: 'Blog',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'blog-list-sidebar',
        url: '/blog/list-sidebar',
        parentKey: 'pages',
        label: 'List View with Sidebar',
      },
      {
        key: 'blog-grid-sidebar',
        url: '/blog/grid-sidebar',
        parentKey: 'pages',
        label: 'Grid View with Sidebar',
      },
      {
        key: 'blog-list-no-sidebar',
        url: '/blog/list',
        parentKey: 'pages',
        label: 'List View no Sidebar',
      },
      {
        key: 'blog-grid-no-sidebar',
        url: '/blog/grid',
        parentKey: 'pages',
        label: 'Grid View no Sidebar',
      },
      {
        key: 'blog-simple-feed',
        url: '/blog/simple-feed',
        parentKey: 'pages',
        label: 'Simple Feed',
      },
      {
        key: 'blog-single-post',
        url: '/blog/single-post',
        parentKey: 'pages',
        label: 'Single post',
      },
      {
        key: 'podcast',
        url: '/blog/podcast',
        parentKey: 'pages',
        label: 'Podcast',
      },

      {
        key: 'pages-portfolio',
        label: 'Portfolio',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'portfolio-grid',
        url: '/portfolio/grid',
        parentKey: 'pages',
        label: 'Grid View',
      },
      {
        key: 'portfolio-list',
        url: '/portfolio/list',
        parentKey: 'pages',
        label: 'List View',
      },
      {
        key: 'portfolio-slider',
        url: '/portfolio/slider',
        parentKey: 'pages',
        label: 'Slider View',
      },
      {
        key: 'portfolio-courses',
        url: '/portfolio/courses',
        parentKey: 'pages',
        label: 'Courses',
      },
      {
        key: 'portfolio-single-project',
        url: '/portfolio/single-project',
        parentKey: 'pages',
        label: 'Single Project',
      },
      {
        key: 'portfolio-single-course',
        url: '/portfolio/single-course',
        parentKey: 'pages',
        label: 'Single Course',
      },

      {
        key: 'pages-services',
        label: 'Services',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'services-1',
        url: '/services/v1',
        parentKey: 'pages',
        label: 'Services v.1',
      },
      {
        key: 'services-2',
        url: '/services/v2',
        parentKey: 'pages',
        label: 'Services v.2',
      },
      {
        key: 'services-details-v1',
        url: '/services/details-v1',
        parentKey: 'pages',
        label: 'Service Details v.1',
      },
      {
        key: 'services-details-v2',
        url: '/services/details-v2',
        parentKey: 'pages',
        label: 'Service Details v.2',
      },

      {
        key: 'pages-pricing',
        label: 'Pricing',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'pricing',
        url: '/pages/pricing',
        parentKey: 'pages-pricing',
        label: 'Pricing Page',
      },

      {
        key: 'pages-contacts',
        label: 'Contacts',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'contacts-1',
        url: '/contacts/v1',
        parentKey: 'pages',
        label: 'Contacts v.1',
      },
      {
        key: 'contacts-2',
        url: '/contacts/v2',
        parentKey: 'pages',
        label: 'Contacts v.2',
      },
      {
        key: 'contacts-3',
        url: '/contacts/v3',
        parentKey: 'pages',
        label: 'Contacts v.3',
      },

      {
        key: 'pages-specialty',
        label: 'Specialty',
        isHeading: true,
        parentKey: 'pages',
      },
      {
        key: 'specialty-error-404-1',
        url: '/errors/404-1',
        parentKey: 'pages',
        label: '404 Error v.1',
        target: '_blank',
      },
      {
        key: 'specialty-error-404-2',
        url: '/errors/404-2',
        parentKey: 'pages',
        label: '404 Error v.2',
        target: '_blank',
      },
    ],
  },
  {
    key: 'account',
    label: 'Account',
    isTitle: true,
    children: [
      {
        key: 'account-details',
        label: 'Account Details',
        url: '/account/details',
        parentKey: 'account',
      },
      {
        key: 'account-security',
        label: 'Security',
        url: '/account/security',
        parentKey: 'account',
      },
      {
        key: 'account-notifications',
        label: 'Notifications',
        url: '/account/notifications',
        parentKey: 'account',
      },
      {
        key: 'account-messages',
        label: 'Messages',
        url: '/account/messages',
        parentKey: 'account',
      },
      {
        key: 'account-saved-items',
        label: 'Saved Items',
        url: '/account/saved-items',
        parentKey: 'account',
      },
      {
        key: 'account-collections',
        label: 'My Collections',
        url: '/account/collections',
        parentKey: 'account',
      },
      {
        key: 'account-payment-details',
        label: 'Payment Details',
        url: '/account/payment-details',
        parentKey: 'account',
      },
      {
        key: 'account-sign-in',
        url: '/account/sign-in',
        parentKey: 'account',
        label: 'Sign In',
      },
      {
        key: 'account-sign-up',
        url: '/account/sign-up',
        parentKey: 'account',
        label: 'Sign Up',
      },
    ],
  },
  {
    key: 'docs',
    label: 'Docs',
    url: '/docs',
    isTitle: true,
  },
]
