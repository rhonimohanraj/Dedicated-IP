import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'

@Component({
  selector: 'about-v3-hero',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
