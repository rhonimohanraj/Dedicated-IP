import { SafeHtml } from '@angular/platform-browser'

export type DemoPageType = {
  image: string
  title: string
  link: string
}

export type MoreFeatureType = {
  icon?: string
  image?: SafeHtml
  title: string
  description: string
}

const iconImage = `<svg class="m-1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
                        <g clip-path="url(#D)">
                            <path d="M6.706 11.335c0-4.925 4.007-8.932 8.932-8.932s8.932 4.007 8.932 8.932a9 9 0 0 1-.169 1.73l2.358.463c.142-.723.214-1.461.214-2.193A11.35 11.35 0 0 0 15.638 0 11.35 11.35 0 0 0 4.303 11.335c0 2.566.883 5.081 2.486 7.082l1.875-1.503a8.83 8.83 0 0 1-1.958-5.579z" fill="url(#A)" />
                            <path d="M15.638 6.407c2.716 0 4.927 2.21 4.927 4.927h2.403a7.34 7.34 0 0 0-7.33-7.33 7.34 7.34 0 0 0-7.33 7.33 7.33 7.33 0 0 0 .959 3.623l2.088-1.19c-.421-.739-.643-1.581-.643-2.433 0-2.716 2.21-4.927 4.926-4.927z" fill="url(#B)" />
                            <path d="M28.375 17.3a3.31 3.31 0 0 0-1.06.173 3.33 3.33 0 0 0-3.186-2.374c-.392 0-.767.069-1.116.193a3.33 3.33 0 0 0-3.129-2.203c-.32 0-.628.046-.921.131v-1.884a3.33 3.33 0 0 0-3.324-3.324 3.33 3.33 0 0 0-3.324 3.324v6.998c-.293-.084-.602-.131-.921-.131a3.33 3.33 0 0 0-3.324 3.324v6.236a8.25 8.25 0 0 0 8.237 8.237h7.157a8.25 8.25 0 0 0 8.237-8.237v-7.14a3.33 3.33 0 0 0-3.324-3.324zm.921 10.464c0 3.217-2.617 5.834-5.834 5.834h-7.157c-3.217 0-5.834-2.617-5.834-5.834v-6.236c0-.508.413-.921.921-.921s.921.413.921.921v4.852h2.403V11.336c0-.508.413-.921.921-.921s.921.413.921.921v5.077 3.526.684h2.403v-.684-3.526c0-.508.413-.921.921-.921s.921.413.921.921v4.211h2.403v-2.201c0-.508.413-.921.921-.921s.921.413.921.921v2.201h2.403c0-.508.413-.921.921-.921s.921.413.921.921v7.14z" fill="url(#C)" />
                        </g>
                        <defs>
                            <linearGradient id="A" x1="4.303" y1="9.252" x2="26.973" y2="9.252" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#6366f1" />
                                <stop offset=".5" stop-color="#8b5cf6" />
                                <stop offset="1" stop-color="#d946ef" />
                            </linearGradient>
                            <linearGradient id="B" x1="8.309" y1="9.506" x2="22.968" y2="9.506" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#6366f1" />
                                <stop offset=".5" stop-color="#8b5cf6" />
                                <stop offset="1" stop-color="#d946ef" />
                            </linearGradient>
                            <linearGradient id="C" x1="8.068" y1="22.073" x2="31.7" y2="22.073" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#6366f1" />
                                <stop offset=".5" stop-color="#8b5cf6" />
                                <stop offset="1" stop-color="#d946ef" />
                            </linearGradient>
                            <clipPath id="D">
                                <path fill="#fff" d="M0 0h36v36H0z" />
                            </clipPath>
                        </defs>
                    </svg>`

const mobileApp1Img =
  'assets/img/landing/intro/landings/mobile-app-showcase-v1.jpg'
const mobileApp2Img =
  'assets/img/landing/intro/landings/mobile-app-showcase-v2.jpg'
const mobileApp3Img =
  'assets/img/landing/intro/landings/mobile-app-showcase-v3.jpg'
const productLandingImg =
  'assets/img/landing/intro/landings/product-landing.jpg'
const saas1Img = 'assets/img/landing/intro/landings/saas-v1.jpg'
const saas2Img = 'assets/img/landing/intro/landings/saas-v2.jpg'
const saas3Img = 'assets/img/landing/intro/landings/saas-v3.jpg'
const saas4Img = 'assets/img/landing/intro/landings/saas-v4.jpg'
const saas5Img = 'assets/img/landing/intro/landings/saas-v5.jpg'
const startupImg = 'assets/img/landing/intro/landings/startup.jpg'
const financialImg = 'assets/img/landing/intro/landings/financial.jpg'
const onlineCourseImg = 'assets/img/landing/intro/landings/online-courses.jpg'
const medicalImg = 'assets/img/landing/intro/landings/medical.jpg'
const digitalAgencyImg = 'assets/img/landing/intro/landings/digital-agency.jpg'
const softwareAgency1Img =
  'assets/img/landing/intro/landings/software-agency-v1.jpg'
const softwareAgency2Img =
  'assets/img/landing/intro/landings/software-agency-v2.jpg'
const softwareAgency3Img =
  'assets/img/landing/intro/landings/software-agency-v3.jpg'
const conferenceImg = 'assets/img/landing/intro/landings/conference.jpg'
const blogHomepageImg = 'assets/img/landing/intro/landings/blog-homepage.jpg'

export const demoLandingPagesData: DemoPageType[] = [
  {
    image: mobileApp1Img,
    title: 'Mobile App Showcase v.1',
    link: '/landings/mobile-showcase-1',
  },
  {
    image: mobileApp2Img,
    title: 'Mobile App Showcase v.2',
    link: '/landings/mobile-showcase-2',
  },
  {
    image: mobileApp3Img,
    title: 'Mobile App Showcase v.3',
    link: '/landings/mobile-showcase-3',
  },
  {
    image: productLandingImg,
    title: 'Product Landing',
    link: '/landings/product',
  },
  {
    image: saas1Img,
    title: 'SaaS v.1',
    link: '/landings/saas-1',
  },
  {
    image: saas2Img,
    title: 'SaaS v.2',
    link: '/landings/saas-2',
  },
  {
    image: saas3Img,
    title: 'SaaS v.3',
    link: '/landings/saas-3',
  },
  {
    image: saas4Img,
    title: 'SaaS v.4',
    link: '/landings/saas-4',
  },
  {
    image: saas5Img,
    title: 'SaaS v.5',
    link: '/landings/saas-5',
  },
  {
    image: startupImg,
    title: 'Startup',
    link: '/landings/startup',
  },
  {
    image: financialImg,
    title: 'Financial Consulting',
    link: '/landings/financial-consulting',
  },
  {
    image: onlineCourseImg,
    title: 'Online Courses',
    link: '/landings/online-courses',
  },
  {
    image: medicalImg,
    title: 'Medical',
    link: '/landings/medical',
  },
  {
    image: digitalAgencyImg,
    title: 'Digital Agency',
    link: '/landings/digital-agency',
  },
  {
    image: softwareAgency1Img,
    title: 'Software Dev Agency v.1',
    link: '/landings/software-dev-agency-1',
  },
  {
    image: softwareAgency2Img,
    title: 'Software Dev Agency v.2',
    link: '/landings/software-dev-agency-2',
  },
  {
    image: softwareAgency3Img,
    title: 'Software Dev Agency v.3',
    link: '/landings/software-dev-agency-3',
  },
  {
    image: conferenceImg,
    title: 'Conference',
    link: '/landings/conference',
  },
  {
    image: blogHomepageImg,
    title: 'Blog Homepage',
    link: '/landings/blog',
  },
]

export const moreFeatureData: MoreFeatureType[] = [
  {
    icon: 'bxl-bootstrap',
    title: 'Built with Bootstrap 5',
    description:
      'Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.',
  },
  {
    icon: 'bx-file',
    title: 'Detailed Documentation',
    description:
      'Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.',
  },
  {
    icon: 'bx-mobile',
    title: 'Mobile Freindly Interface',
    description: `It's not a surprise that nowadays over 80% of users surf the inernet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.`,
  },
  {
    image: iconImage,
    title: 'Touch-Enabled Sliders',
    description:
      "In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.",
  },
  {
    icon: 'bxl-html5',
    title: 'W3C Valid HTML Code',
    description:
      'All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.',
  },
  {
    icon: 'bxl-nodejs',
    title: 'Kick-Start Your Development',
    description:
      'Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.',
  },
  {
    icon: 'bxl-sass',
    title: 'Easy to Customize with Sass',
    description:
      'Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.',
  },
  {
    icon: 'bxl-javascript',
    title: 'Future Proof Java-Script',
    description:
      'Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.',
  },
]
