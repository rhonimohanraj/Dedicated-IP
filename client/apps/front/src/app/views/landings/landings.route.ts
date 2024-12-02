import { Route } from '@angular/router'
import { MobileShowcaseV1Component } from './mobile-showcase-v1/mobile-showcase-v1.component'
import { MobileShowcaseV2Component } from './mobile-showcase-v2/mobile-showcase-v2.component'
import { MobileShowcaseV3Component } from './mobile-showcase-v3/mobile-showcase-v3.component'
import { ProductComponent } from './product/product.component'
import { SaasV1Component } from './saas-v1/saas-v1.component'
import { SaasV2Component } from './saas-v2/saas-v2.component'
import { SaasV3Component } from './saas-v3/saas-v3.component'
import { SaasV4Component } from './saas-v4/saas-v4.component'
import { SaasV5Component } from './saas-v5/saas-v5.component'
import { StartupComponent } from './startup/startup.component'
import { FinancialComponent } from './financial/financial.component'
import { OnlineCoursesComponent } from './online-courses/online-courses.component'
import { MedicalComponent } from './medical/medical.component'
import { SoftwareDevAgencyV1Component } from './software-dev-agency-v1/software-dev-agency-v1.component'
import { SoftwareDevAgencyV2Component } from './software-dev-agency-v2/software-dev-agency-v2.component'
import { SoftwareDevAgencyV3Component } from './software-dev-agency-v3/software-dev-agency-v3.component'
import { ConferenceComponent } from './conference/conference.component'
import { DigitalAgencyComponent } from './digital-agency/digital-agency.component'
import { BlogComponent } from './blog/blog.component'

export const LANDING_ROUTES: Route[] = [
  {
    path: 'mobile-showcase-1',
    component: MobileShowcaseV1Component,
    data: { title: 'Mobile App Showcase Landing v.1' },
  },
  {
    path: 'mobile-showcase-2',
    component: MobileShowcaseV2Component,
    data: { title: 'Mobile App Showcase Landing v.2' },
  },
  {
    path: 'mobile-showcase-3',
    component: MobileShowcaseV3Component,
    data: { title: 'Mobile App Showcase Landing v.3' },
  },
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Product Landing' },
  },
  {
    path: 'saas-1',
    component: SaasV1Component,
    data: { title: 'Saas Landing v.1' },
  },
  {
    path: 'saas-2',
    component: SaasV2Component,
    data: { title: 'Saas Landing v.2' },
  },
  {
    path: 'saas-3',
    component: SaasV3Component,
    data: { title: 'Saas Landing v.3' },
  },
  {
    path: 'saas-4',
    component: SaasV4Component,
    data: { title: 'Saas Landing v.4' },
  },
  {
    path: 'saas-5',
    component: SaasV5Component,
    data: { title: 'Saas Landing v.5' },
  },
  {
    path: 'startup',
    component: StartupComponent,
    data: { title: 'Startup Landing' },
  },
  {
    path: 'financial-consulting',
    component: FinancialComponent,
    data: { title: 'Financial Consulting Landing' },
  },
  {
    path: 'online-courses',
    component: OnlineCoursesComponent,
    data: { title: 'Online Courses Landing' },
  },
  {
    path: 'medical',
    component: MedicalComponent,
    data: { title: 'Medical Landing' },
  },
  {
    path: 'software-dev-agency-1',
    component: SoftwareDevAgencyV1Component,
    data: { title: 'Software Dev Agency Landing v.1' },
  },
  {
    path: 'software-dev-agency-2',
    component: SoftwareDevAgencyV2Component,
    data: { title: 'Software Dev Agency Landing v.2' },
  },
  {
    path: 'software-dev-agency-3',
    component: SoftwareDevAgencyV3Component,
    data: { title: 'Software Dev Agency Landing v.3' },
  },
  {
    path: 'conference',
    component: ConferenceComponent,
    data: { title: 'Conference Landing' },
  },
  {
    path: 'digital-agency',
    component: DigitalAgencyComponent,
    data: { title: 'Digital Agency Landing' },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog Homepage' },
  },
]
