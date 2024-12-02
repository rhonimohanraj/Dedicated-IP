import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { credits } from '@states/constants'
import { footer2Items, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer7',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer7.component.html',
  styles: ``,
})
export class Footer7Component {
  itemsList = footer2Items
  socialLinks = footerSocialLinks
  creditsBy = credits
}
