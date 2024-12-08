import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [RouterLink, ButtonModule],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  constructor(public layoutService: LayoutService) {}
}
