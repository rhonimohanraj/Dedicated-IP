import { Component } from '@angular/core'
import { NgbNavModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { clientReviewData } from '../../data'

@Component({
  selector: 'software-dev-agency2-about',
  standalone: true,
  imports: [NgbNavModule, NgbRatingModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {
  clientData = clientReviewData
}
