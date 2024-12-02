import { Component } from '@angular/core'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'medical-hero',
  standalone: true,
  imports: [RellaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
