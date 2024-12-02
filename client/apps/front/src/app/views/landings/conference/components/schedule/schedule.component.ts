import { Component } from '@angular/core'
import { timelineData } from '../../data'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'conference-schedule',
  standalone: true,
  imports: [NgbNavModule, CommonModule],
  templateUrl: './schedule.component.html',
  styles: ``,
})
export class ScheduleComponent {
  scheduleList = timelineData
}
