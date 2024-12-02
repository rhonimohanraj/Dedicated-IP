import { Component } from '@angular/core'
import { awardsData } from '../../data'

@Component({
  selector: 'about-v1-awards',
  standalone: true,
  imports: [],
  templateUrl: './awards.component.html',
  styles: ``,
})
export class AwardsComponent {
  aboutAward = awardsData
}
