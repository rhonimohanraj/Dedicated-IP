import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'
import { currency } from '@states/constants'

@Component({
  selector: 'startup-hero',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  selectedCurrency = currency
}
