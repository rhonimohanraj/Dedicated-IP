import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { BrandsComponent } from './components/brands/brands.component'
import { FeatureComponent } from './components/feature/feature.component'
import { AppFeatureComponent } from './components/app-feature/app-feature.component'
import { CryptoFeatureComponent } from './components/crypto-feature/crypto-feature.component'
import { VideoStepsComponent } from './components/video-steps/video-steps.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer5Component } from './components/footer5/footer5.component'

@Component({
  selector: 'app-saas-v3',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    BrandsComponent,
    FeatureComponent,
    AppFeatureComponent,
    CryptoFeatureComponent,
    VideoStepsComponent,
    TestimonialsComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './saas-v3.component.html',
  styles: ``,
})
export class SaasV3Component {}
