import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContentComponent } from './component/content/content.component'
import { SidebarComponent } from './component/sidebar/sidebar.component'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-grid-sidebar',
  standalone: true,
  imports: [
    TopbarComponent,
    ContentComponent,
    SidebarComponent,
    BreadcrumbComponent,
    SidebarComponent,
    CtaComponent,
    Footer9Component,
  ],
  templateUrl: './grid-sidebar.component.html',
  styles: ``,
})
export class GridSidebarComponent {}
