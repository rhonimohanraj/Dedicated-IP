import { Component } from '@angular/core'
import { benefitData } from '../../data'

@Component({
  selector: 'startup-benefits',
  standalone: true,
  imports: [],
  templateUrl: './benefits.component.html',
  styles: ``,
})
export class BenefitsComponent {
  benefitList = benefitData
}
