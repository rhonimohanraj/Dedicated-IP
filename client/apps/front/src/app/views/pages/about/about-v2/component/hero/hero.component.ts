import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { JarallaxOptions } from 'jarallax'

@Component({
  selector: 'about-v2-hero',
  standalone: true,
  imports: [JarallaxDirective, BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  jarallaxConfig: JarallaxOptions = {
    speed: 0.35,
  }
}
