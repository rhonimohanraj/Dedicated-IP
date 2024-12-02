import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { credits } from '@states/constants'
import { footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer8',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './footer8.component.html',
  styles: ``,
})
export class Footer8Component {
  socialLink = footerSocialLinks
  creditsBy = credits
}
