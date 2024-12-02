import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { CtaComponent } from './component/cta/cta.component'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { ContentComponent } from './component/content/content.component'
import { PaginationComponent } from './component/pagination/pagination.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-grid-no-sidebar',
  standalone: true,
  imports: [
    TopbarComponent,
    CtaComponent,
    BreadcrumbComponent,
    ContentComponent,
    PaginationComponent,
    Footer9Component,
  ],
  templateUrl: './grid-no-sidebar.component.html',
  styles: ``,
})
export class GridNoSidebarComponent {}
