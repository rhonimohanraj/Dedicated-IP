import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'

@Component({
  selector: 'startup-cta',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './cta.component.html',
  styles: ``,
})
export class CtaComponent {}
