import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContentComponent } from './component/content/content.component'
import { PaginationComponent } from './component/pagination/pagination.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-list-no-sidebar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TopbarComponent,
    ContentComponent,
    PaginationComponent,
    CtaComponent,
    Footer9Component,
  ],
  templateUrl: './list-no-sidebar.component.html',
  styles: ``,
})
export class ListNoSidebarComponent {}
