import { Component } from '@angular/core'
import { TiltDirective } from '@components/vanila-tilt-directive'

@Component({
  selector: 'saas2-hero',
  standalone: true,
  imports: [TiltDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
