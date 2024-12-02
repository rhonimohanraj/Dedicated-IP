import { Component } from '@angular/core'
import { serviceData } from '../../data'

@Component({
  selector: 'mobile-showcase-v2-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styles: ``,
})
export class InfoComponent {
  serviceList = serviceData
}
