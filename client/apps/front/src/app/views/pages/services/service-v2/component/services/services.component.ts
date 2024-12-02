import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { servicesData } from '../../data'

@Component({
  selector: 'service-v2-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  servicesData = servicesData
}
