import { Component } from '@angular/core'
import { priceData } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'saas4-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styles: ``,
})
export class PriceComponent {
  priceList = priceData
  checkedPrice: boolean = false

  togglePrice(event: any) {
    this.checkedPrice = event.target.checked
  }
}
