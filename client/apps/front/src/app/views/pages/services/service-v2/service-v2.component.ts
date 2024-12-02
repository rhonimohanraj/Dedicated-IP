import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ServicesComponent } from './component/services/services.component'
import { ContactFormComponent } from './component/contact-form/contact-form.component'
import { IndustriesComponent } from './component/industries/industries.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-service-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbComponent,
    ServicesComponent,
    ContactFormComponent,
    IndustriesComponent,
    Footer9Component,
  ],
  templateUrl: './service-v2.component.html',
  styles: ``,
})
export class ServiceV2Component {}
