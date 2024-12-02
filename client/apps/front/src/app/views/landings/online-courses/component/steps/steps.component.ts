import { Component } from '@angular/core'
import { processData } from '../../data'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'online-steps',
  standalone: true,
  imports: [RellaxDirective],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  steps = processData
}
