import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SubscribeFormComponent } from '@components/subscribe-form/subscribe-form.component'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { credits } from '@states/constants'
import { footer5Links, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer9',
  standalone: true,
  imports: [SubscribeFormComponent, RouterModule, NgbCollapseModule],
  templateUrl: './footer9.component.html',
  styles: ``,
})
export class Footer9Component {
  itemsLink = footer5Links
  socialLinks = footerSocialLinks
  creditsBy = credits
  isUsefulLinksCollapsed = true
  isSocialLinksCollapsed: boolean = true

  toggleMenu(collapseMenu: string) {
    if (collapseMenu == 'isUsefulLinksCollapsed') {
      this.isSocialLinksCollapsed = true
      this.isUsefulLinksCollapsed = !this.isUsefulLinksCollapsed
    } else {
      this.isUsefulLinksCollapsed = true
      this.isSocialLinksCollapsed = !this.isSocialLinksCollapsed
    }
  }
}
