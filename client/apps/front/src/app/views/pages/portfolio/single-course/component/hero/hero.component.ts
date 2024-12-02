import { Component } from '@angular/core'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { JarallaxOptions } from 'jarallax'

@Component({
  selector: 'single-course-hero',
  standalone: true,
  imports: [Breadcrumb2Component, JarallaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  jarallaxConfig: JarallaxOptions = {
    speed: 0.35,
  }
}
