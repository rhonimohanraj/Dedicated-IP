import { Route } from '@angular/router'
import { ContactV1Component } from './contact-v1/contact-v1.component'
import { ContactV3Component } from './contact-v3/contact-v3.component'
import { ContactV2Component } from './contact-v2/contact-v2.component'

export const CONTACT_ROUTES: Route[] = [
  {
    path: 'v1',
    component: ContactV1Component,
    data: { title: 'Contacts v.1' },
  },
  {
    path: 'v2',
    component: ContactV2Component,
    data: { title: 'Contacts v.2' },
  },
  {
    path: 'v3',
    component: ContactV3Component,
    data: { title: 'Contacts v.3' },
  },
]
