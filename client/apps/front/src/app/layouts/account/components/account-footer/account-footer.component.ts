import { Component } from '@angular/core'
import { SubscribeFormComponent } from '@components/subscribe-form/subscribe-form.component'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'
import { credits } from '@states/constants'
import { accountFooter, accountSocialLink } from 'src/app/common/footer-items'

@Component({
  selector: 'app-account-footer',
  standalone: true,
  imports: [SubscribeFormComponent, NgbCollapseModule],
  templateUrl: './account-footer.component.html',
  styles: ``,
})
export class AccountFooterComponent {
  accountLink = accountFooter
  socialLink = accountSocialLink
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
