import { Component } from '@angular/core'
import { credits } from '@states/constants'
import { footer2Items, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer11',
  standalone: true,
  imports: [],
  templateUrl: './footer11.component.html',
  styles: ``,
})
export class Footer11Component {
  itemsData = footer2Items
  socialIcon = footerSocialLinks
  creditsBy = credits
}
