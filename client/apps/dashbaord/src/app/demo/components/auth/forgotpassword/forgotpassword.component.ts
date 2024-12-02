import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';

@Component({
  imports: [RouterLink, ButtonModule, ChipsModule],
  templateUrl: './forgotpassword.component.html',
})
export class ForgotPasswordComponent {
  constructor(public layoutService: LayoutService) {}

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }
}
