import { Route } from '@angular/router'
import { ServiceV2Component } from './service-v2/service-v2.component'
import { ServiceV1Component } from './service-v1/service-v1.component'
import { ServiceDetailV1Component } from './service-detail-v1/service-detail-v1.component'
import { ServiceDetailV2Component } from './service-detail-v2/service-detail-v2.component'

export const SERVICE_ROUTE: Route[] = [
  {
    path: 'v1',
    component: ServiceV1Component,
    data: { title: 'Services v.1' },
  },
  {
    path: 'v2',
    component: ServiceV2Component,
    data: { title: 'Services v.2' },
  },
  {
    path: 'details-v1',
    component: ServiceDetailV1Component,
    data: { title: 'Service Details  v.1' },
  },
  {
    path: 'details-v2',
    component: ServiceDetailV2Component,
    data: { title: 'Service Details v.2' },
  },
]
