import { Component } from '@angular/core'
import { pricingData } from '../../data'
import { currency } from '@states/constants'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'service-detail-v2-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styles: ``,
})
export class PricesComponent {
  selectedCurrency = currency
  pricesPricingData = pricingData
}
