import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'component-logo-box',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="navbar-brand pe-3">
      <img src="assets/img/logo.svg" width="47" alt="Logo" />
      Silicon
    </a>
  `,
})
export class LogoBoxComponent {}
