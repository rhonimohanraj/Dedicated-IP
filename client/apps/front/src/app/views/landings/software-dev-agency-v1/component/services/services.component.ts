import { Component } from '@angular/core'
import { serviceData } from '../../data'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'software-dev-agency1-services',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  serviceList = serviceData
}
