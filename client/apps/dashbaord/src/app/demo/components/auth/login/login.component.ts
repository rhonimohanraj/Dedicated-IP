import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  rememberMe: boolean = false;

  constructor(public layoutService: LayoutService) {}

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }
}
