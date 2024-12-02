import { Component } from '@angular/core'
import { awardData } from '../../data'

@Component({
  selector: 'digital-agency-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styles: ``,
})
export class AwardsComponent {
  awardList = awardData
}
