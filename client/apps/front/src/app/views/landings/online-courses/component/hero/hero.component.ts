import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'
import { courses } from '../../data'

@Component({
  selector: 'online-hero',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  categories = courses
}
