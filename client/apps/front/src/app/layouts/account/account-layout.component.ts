import { Component, inject, Input } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { BackToTopComponent } from '../../components/back-to-top/back-to-top.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { AccountSidebarComponent } from '@layouts/account/components/account-sidebar/account-sidebar.component'
import { AccountFooterComponent } from '@layouts/account/components/account-footer/account-footer.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [
    RouterModule,
    TopbarComponent,
    BackToTopComponent,
    AccountSidebarComponent,
    AccountFooterComponent,
    CommonModule,
  ],
  template: `
    <main class="page-wrapper">
      <component-topbar
        [headerClassName]="
          'bg-light border-bottom border-light shadow-sm fixed-top'
        "
      />

      <section class="container pt-5">
        <div class="row">
          <aside class="col-lg-3 col-md-4 border-end pb-5 mt-n5">
            <app-account-sidebar />
          </aside>

          <div [ngClass]="getRouterOutletClass()">
            <router-outlet />
          </div>
        </div>
      </section>
    </main>
    <app-account-footer />
  `,
  styles: ``,
})
export class AccountLayoutComponent {
  private router = inject(Router)

  getRouterOutletClass(): string {
    let classes = 'col-md-8 pb-5 mb-lg-4 pt-md-5 mt-n3 mt-md-0'

    if (this.router.url.includes('/messages')) {
      classes += ' col-lg-9 mb-lg-2'
    } else {
      classes += ' offset-lg-1 mb-2'
    }

    return classes
  }
}
