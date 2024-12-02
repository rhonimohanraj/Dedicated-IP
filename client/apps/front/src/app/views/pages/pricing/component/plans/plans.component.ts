import { Component } from '@angular/core'
import { priceData } from '../../data'
import { CommonModule } from '@angular/common'
import { currency } from '@states/constants'

@Component({
  selector: 'pricing-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styles: ``,
})
export class PlansComponent {
  pricingDataPlan = priceData
  checkedPrice: boolean = false
  selectedCurrency = currency

  togglePrice(event: any) {
    this.checkedPrice = event.target.checked
  }
}
