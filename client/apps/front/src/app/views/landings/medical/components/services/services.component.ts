import { Component } from '@angular/core'
import { servicesData } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'medical-services',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  serviceList = servicesData
}
