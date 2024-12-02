import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'

@Component({
  selector: 'service-detail-v2-hero',
  standalone: true,
  imports: [Breadcrumb2Component, RouterModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
