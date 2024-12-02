import { Component } from '@angular/core'
import { pricingData } from '../../data'
import { currency } from '@states/constants'

@Component({
  selector: 'sass5-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  selectedCurrency = currency
  pricingList = pricingData
}
