import { Component } from '@angular/core'
import { ListComponent } from './component/list/list.component'
import { CtaComponent } from './component/cta/cta.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    ListComponent,
    CtaComponent,
    TopbarComponent,
    BreadcrumbComponent,
    Footer5Component,
  ],
  templateUrl: './list-view.component.html',
  styles: ``,
})
export class ListViewComponent {}
