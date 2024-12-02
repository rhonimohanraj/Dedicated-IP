import { Component } from '@angular/core'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { JarallaxOptions } from 'jarallax'

@Component({
  selector: 'single-project-hero',
  standalone: true,
  imports: [JarallaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
  }
}
