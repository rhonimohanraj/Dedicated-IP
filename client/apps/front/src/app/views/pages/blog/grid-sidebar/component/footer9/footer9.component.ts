import { Component, TemplateRef, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarButtonComponent } from '@components/sidebar-button/sidebar-button.component'
import { SubscribeFormComponent } from '@components/subscribe-form/subscribe-form.component'
import { NgbCollapseModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { credits, currentYear } from '@states/constants'
import { footer5Links, footerSocialLinks } from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer9',
  standalone: true,
  imports: [
    SubscribeFormComponent,
    RouterModule,
    NgbCollapseModule,
    SidebarButtonComponent,
  ],
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

  offcanvasService = inject(NgbOffcanvas)
  currentYear = currentYear
  openMenu(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
