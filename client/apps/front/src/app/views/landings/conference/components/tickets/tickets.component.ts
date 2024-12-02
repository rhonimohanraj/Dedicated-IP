import { Component } from '@angular/core'
import { currency, currentYear } from '@states/constants'

@Component({
  selector: 'conference-tickets',
  standalone: true,
  imports: [],
  templateUrl: './tickets.component.html',
  styles: ``,
})
export class TicketsComponent {
  selectedCurrency = currency
  currentYear = currentYear
}
