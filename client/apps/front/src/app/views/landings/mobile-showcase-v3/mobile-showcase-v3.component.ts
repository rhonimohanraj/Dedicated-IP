import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { IntegrationComponent } from './components/integration/integration.component'
import { FeaturesComponent } from './components/features/features.component'
import { WorkSliderComponent } from './components/work-slider/work-slider.component'
import { VideoComponent } from './components/video/video.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { AwardsComponent } from './components/awards/awards.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer3Component } from './components/footer3/footer3.component'

@Component({
  selector: 'app-mobile-showcase-v3',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    IntegrationComponent,
    FeaturesComponent,
    WorkSliderComponent,
    VideoComponent,
    BenefitsComponent,
    TestimonialsComponent,
    AwardsComponent,
    CtaComponent,
    Footer3Component,
  ],
  templateUrl: './mobile-showcase-v3.component.html',
  styles: ``,
})
export class MobileShowcaseV3Component {}
