import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { FeatureComponent } from './component/feature/feature.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { CasesComponent } from './component/cases/cases.component'
import { PricingComponent } from './component/pricing/pricing.component'
import { TestimonialsComponent } from './component/testimonials/testimonials.component'
import { IntegrationsComponent } from './component/integrations/integrations.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-saas-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    FeatureComponent,
    DashboardComponent,
    CasesComponent,
    PricingComponent,
    TestimonialsComponent,
    IntegrationsComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './saas-v1.component.html',
  styles: ``,
})
export class SaasV1Component {}
