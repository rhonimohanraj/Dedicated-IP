import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { credits } from '@states/constants'

@Component({
  selector: 'buy-now-button',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host(buy-now-button) {
      display: contents;
    }
  `,
  template: `
    <a
      class="btn btn-primary"
      [ngClass]="buttonClassName"
      href="{{buyLink}}" target="_blank"
      rel="noopener"
    >
      <i class="bx bx-cart" [ngClass]="iconClassName"></i>
      &nbsp;Buy now
    </a>
  `,
})
export class BuyNowButtonComponent {
  @Input() buttonClassName?: string
  @Input() iconClassName?: string

  buyLink = credits.buyLink
}
