import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BackToTopComponent } from '../components/back-to-top/back-to-top.component'

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterModule, BackToTopComponent],
  template: `
    <main class="page-wrapper">
      <router-outlet />
      <component-back-to-top />
    </main>
  `,
  styles: ``,
})
export class LandingLayoutComponent {}
