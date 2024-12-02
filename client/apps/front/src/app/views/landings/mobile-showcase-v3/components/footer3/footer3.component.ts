import { Component } from '@angular/core'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { credits } from '@states/constants'
import { footer3Links, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer3',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './footer3.component.html',
  styles: ``,
})
export class Footer3Component {
  itamsList = footer3Links
  socialLinks = footerSocialLinks
  creditsBy = credits

  toggleMenu(item: any) {
    this.itamsList.forEach((i: any) => {
      if (i !== item) {
        i.isCollapsed = true
      }
    })
    item.isCollapsed = !item.isCollapsed
  }
}
