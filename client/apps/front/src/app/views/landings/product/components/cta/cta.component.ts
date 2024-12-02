import { Component } from '@angular/core'
import { credits } from '@states/constants'

@Component({
  selector: 'product-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styles: ``,
})
export class CtaComponent {
  buyLink = credits.buyLink
}
