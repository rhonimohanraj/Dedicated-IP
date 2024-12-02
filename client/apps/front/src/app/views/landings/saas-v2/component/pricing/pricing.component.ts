import { Component } from '@angular/core'
import { currency } from '@states/constants'

@Component({
  selector: 'saas2-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  selectedCurrency = currency
}
