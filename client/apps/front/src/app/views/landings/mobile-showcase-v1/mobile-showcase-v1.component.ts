import { Component } from '@angular/core'
import { HeroComponent } from './hero/hero.component'
import { FeatureComponent } from './feature/feature.component'
import { BrandComponent } from './brand/brand.component'
import { WorkComponent } from './work/work.component'
import { ServiceComponent } from './service/service.component'
import { TestimonialComponent } from './testimonial/testimonial.component'
import { FaqsComponent } from './faqs/faqs.component'
import { SubscribeComponent } from './subscribe/subscribe.component'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { Footer2Component } from './footer2/footer2.component'

@Component({
  selector: 'app-mobile-showcase-v1',
  standalone: true,
  imports: [
    HeroComponent,
    FeatureComponent,
    BrandComponent,
    WorkComponent,
    ServiceComponent,
    TestimonialComponent,
    FaqsComponent,
    SubscribeComponent,
    TopbarComponent,
    Footer2Component,
  ],
  template: `
    <component-topbar [headerClassName]="'position-absolute'" />
    <mobile-show-case-hero />
    <mobile-show-case-brand />
    <mobile-show-case-feature />
    <mobile-show-case-work />
    <mobile-show-case-service />
    <mobile-show-case-testimonial />
    <mobile-show-case-faqs />
    <mobile-show-case-subscribe />
    <app-footer2 />
  `,
  styles: ``,
})
export class MobileShowcaseV1Component {}
