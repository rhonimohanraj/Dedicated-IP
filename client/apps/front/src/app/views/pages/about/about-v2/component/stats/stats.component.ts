import { Component } from '@angular/core'
import { statsData } from '../../data'

@Component({
  selector: 'about-v2-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styles: ``,
})
export class StatsComponent {
  statsList = statsData
}
