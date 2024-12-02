import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContactFormComponent } from './component/contact-form/contact-form.component'
import { BranchesComponent } from './component/branches/branches.component'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-contact-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    ContactFormComponent,
    BranchesComponent,
    BreadcrumbComponent,
    Footer9Component,
  ],
  templateUrl: './contact-v2.component.html',
  styles: ``,
})
export class ContactV2Component {}
