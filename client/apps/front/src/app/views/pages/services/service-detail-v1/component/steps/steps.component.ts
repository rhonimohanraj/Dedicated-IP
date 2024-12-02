import { Component } from '@angular/core'
import { workData } from '../../data'

@Component({
  selector: 'service-detail-v1-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  stepWorkData = workData
}
