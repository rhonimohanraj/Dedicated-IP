import { Component } from '@angular/core'
import { credits, currency } from '@states/constants'

@Component({
  selector: 'product-colors',
  standalone: true,
  imports: [],
  templateUrl: './colors.component.html',
  styles: ``,
})
export class ColorsComponent {
  selectedCurrency = currency
  buyLink = credits.buyLink
}
