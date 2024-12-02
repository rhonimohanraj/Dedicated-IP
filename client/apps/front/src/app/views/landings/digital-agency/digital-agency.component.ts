import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { BenefitsComponent } from './component/benefits/benefits.component'
import { ProjectFeatureComponent } from './component/project-feature/project-feature.component'
import { ServicesComponent } from './component/services/services.component'
import { BrandsComponent } from './component/brands/brands.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { AtmosphereComponent } from './component/atmosphere/atmosphere.component'
import { AwardsComponent } from './component/awards/awards.component'
import { BlogComponent } from './component/blog/blog.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-digital-agency',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    BenefitsComponent,
    ProjectFeatureComponent,
    ServicesComponent,
    BrandsComponent,
    TestimonialComponent,
    AtmosphereComponent,
    AwardsComponent,
    BlogComponent,
    Footer5Component,
  ],
  templateUrl: './digital-agency.component.html',
  styles: ``,
})
export class DigitalAgencyComponent {}
