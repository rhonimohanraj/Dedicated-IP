import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { CryptoComponent } from './components/crypto/crypto.component'
import { FeatureComponent } from './components/feature/feature.component'
import { WorkSliderComponent } from './components/work-slider/work-slider.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { CtaComponent } from './components/cta/cta.component'
import { InfoComponent } from './components/info/info.component'
import { Footer2Component } from './components/footer2/footer2.component'

@Component({
  selector: 'app-mobile-showcase-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    CryptoComponent,
    FeatureComponent,
    WorkSliderComponent,
    TestimonialsComponent,
    CtaComponent,
    InfoComponent,
    Footer2Component,
  ],
  template: `
    <component-topbar headerClassName="position-absolute" />
    <mobile-showcase-v2-hero />
    <mobile-showcase-v2-crypto />
    <mobile-showcase-v2-feature />
    <mobile-showcase-v2-work-slider />
    <mobile-showcase-v2-testimonials />
    <mobile-showcase-v2-cta />
    <mobile-showcase-v2-info />
    <!-- Divider -->
    <div class="container mb-md-2 mb-lg-4"><hr /></div>
    <app-footer2 />
  `,
  styles: ``,
})
export class MobileShowcaseV2Component {}
