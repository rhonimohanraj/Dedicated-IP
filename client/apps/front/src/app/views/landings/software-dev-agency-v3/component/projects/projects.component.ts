import { Component } from '@angular/core'
import { featureProjectData } from '../../data'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'software-dev-agency3-projects',
  standalone: true,
  imports: [RellaxDirective],
  templateUrl: './projects.component.html',
  styles: ``,
})
export class ProjectsComponent {
  projectList = featureProjectData
}
