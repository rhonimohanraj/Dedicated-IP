import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { PlansComponent } from './component/plans/plans.component'
import { FaqComponent } from './component/faq/faq.component'
import { ComparisonComponent } from './component/comparison/comparison.component'
import { SubscribeComponent } from './component/subscribe/subscribe.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    PlansComponent,
    ComparisonComponent,
    FaqComponent,
    SubscribeComponent,
    Footer5Component,
  ],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {}
