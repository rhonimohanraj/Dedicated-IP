import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { AboutComponent } from './component/about/about.component'
import { ServicesComponent } from './component/services/services.component'
import { StudiesComponent } from './component/studies/studies.component'
import { FeaturesComponent } from './component/features/features.component'
import { TestimonialsComponent } from './component/testimonials/testimonials.component'
import { BrandsComponent } from './component/brands/brands.component'
import { NewsComponent } from './component/news/news.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-software-dev-agency-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    StudiesComponent,
    FeaturesComponent,
    TestimonialsComponent,
    BrandsComponent,
    NewsComponent,
    CtaComponent,
    Footer9Component,
  ],
  templateUrl: './software-dev-agency-v1.component.html',
  styles: ``,
})
export class SoftwareDevAgencyV1Component {}
