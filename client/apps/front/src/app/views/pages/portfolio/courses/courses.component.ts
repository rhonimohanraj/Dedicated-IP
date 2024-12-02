import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { ContentComponent } from './component/content/content.component'
import { CtaComponent } from './component/cta/cta.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [ContentComponent, CtaComponent, TopbarComponent, Footer5Component],
  templateUrl: './courses.component.html',
  styles: ``,
})
export class CoursesComponent {}
