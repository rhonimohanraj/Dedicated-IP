import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { FeaturesComponent } from './component/features/features.component'
import { ContactFormComponent } from './component/contact-form/contact-form.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-service-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    TestimonialComponent,
    FeaturesComponent,
    ContactFormComponent,
    Footer9Component,
  ],
  templateUrl: './service-v1.component.html',
  styles: ``,
})
export class ServiceV1Component {}
