import { Component } from '@angular/core'
import { purchaseData } from '../../data'

@Component({
  selector: 'mobile-showcase-v3-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styles: ``,
})
export class AwardsComponent {
  awardList = purchaseData
}
