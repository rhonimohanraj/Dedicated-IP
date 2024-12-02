import { Component } from '@angular/core'
import { workData } from '../../data'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'saas1-dashboard',
  standalone: true,
  imports: [RellaxDirective],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {
  workList = workData
}
