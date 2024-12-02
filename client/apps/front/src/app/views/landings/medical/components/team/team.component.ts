import { Component } from '@angular/core'
import { teamData } from '../../data'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'medical-team',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './team.component.html',
  styles: ``,
})
export class TeamComponent {
  teamList = teamData
}
