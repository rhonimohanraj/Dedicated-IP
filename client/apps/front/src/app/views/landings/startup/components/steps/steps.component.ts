import { Component } from '@angular/core'
import { processData } from '../../data'

@Component({
  selector: 'startup-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  steps = processData
}
