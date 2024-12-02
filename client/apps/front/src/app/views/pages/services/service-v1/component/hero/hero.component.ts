import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { serviceData } from '../../data'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'service-v1-hero',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {
  serviceData = serviceData
}
