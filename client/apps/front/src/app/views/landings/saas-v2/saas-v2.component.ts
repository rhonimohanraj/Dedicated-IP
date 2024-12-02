import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { FeaturesComponent } from './component/features/features.component'
import { ComparisonComponent } from './component/comparison/comparison.component'
import { TestimonialsComponent } from './component/testimonials/testimonials.component'
import { DownloadComponent } from './component/download/download.component'
import { PricingComponent } from './component/pricing/pricing.component'
import { IntegrationsComponent } from './component/integrations/integrations.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer7Component } from './component/footer7/footer7.component'

@Component({
  selector: 'app-saas-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    FeaturesComponent,
    ComparisonComponent,
    TestimonialsComponent,
    DownloadComponent,
    PricingComponent,
    IntegrationsComponent,
    CtaComponent,
    Footer7Component,
  ],
  templateUrl: './saas-v2.component.html',
  styles: ``,
})
export class SaasV2Component {}
