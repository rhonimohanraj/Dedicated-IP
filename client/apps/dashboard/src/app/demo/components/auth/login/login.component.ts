import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [RouterLink, ChipsModule, ButtonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  rememberMe: boolean = false;

  constructor(public layoutService: LayoutService) {}

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }
}
