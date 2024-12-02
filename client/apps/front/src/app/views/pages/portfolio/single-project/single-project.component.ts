import { Component } from '@angular/core'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { PagetitleComponent } from './component/pagetitle/pagetitle.component'
import { HeroComponent } from './component/hero/hero.component'
import { AboutComponent } from './component/about/about.component'
import { ImageGridComponent } from './component/image-grid/image-grid.component'
import { ResultComponent } from './component/result/result.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { ProjectComponent } from './component/project/project.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [
    TopbarComponent,
    Breadcrumb2Component,
    PagetitleComponent,
    HeroComponent,
    AboutComponent,
    ImageGridComponent,
    ResultComponent,
    TestimonialComponent,
    ProjectComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './single-project.component.html',
  styles: ``,
})
export class SingleProjectComponent {}
