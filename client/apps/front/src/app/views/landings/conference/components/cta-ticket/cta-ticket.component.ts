import { Component } from '@angular/core'
import { currentYear } from '@states/constants'

@Component({
  selector: 'conference-cta-ticket',
  standalone: true,
  imports: [],
  templateUrl: './cta-ticket.component.html',
  styles: ``,
})
export class CtaTicketComponent {
  currentYear = currentYear
}
