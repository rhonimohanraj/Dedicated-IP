import { Component } from '@angular/core'
import { teamMemberData } from '../../data'

@Component({
  selector: 'about-v1-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styles: ``,
})
export class TeamComponent {
  allTeamMember = teamMemberData
}
