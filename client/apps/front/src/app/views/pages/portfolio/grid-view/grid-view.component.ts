import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { GridComponent } from './component/grid/grid.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbComponent,
    GridComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './grid-view.component.html',
  styles: ``,
})
export class GridViewComponent {}
