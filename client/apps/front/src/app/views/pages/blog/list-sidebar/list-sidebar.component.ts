import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContentComponent } from './component/content/content.component'
import { BlogcardComponent } from './component/blogcard/blogcard.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-list-sidebar',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TopbarComponent,
    ContentComponent,
    BlogcardComponent,
    Footer9Component,
  ],
  templateUrl: './list-sidebar.component.html',
  styles: ``,
})
export class ListSidebarComponent {}
