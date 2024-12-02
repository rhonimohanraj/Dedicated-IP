import { Component } from '@angular/core'
import { features, pricingPlan } from '../../data'
import { CommonModule } from '@angular/common'
import { currency } from '@states/constants'

@Component({
  selector: 'saas1-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  selectedCurrency = currency
  featuresList = features
  pricingList = pricingPlan
  planType: boolean = false

  changePrice(event: any) {
    this.planType = event.target.checked
  }
}
