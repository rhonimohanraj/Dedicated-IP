import { Component } from '@angular/core'
import { servicesData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'digital-agency-services',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  servicesList = servicesData
}
