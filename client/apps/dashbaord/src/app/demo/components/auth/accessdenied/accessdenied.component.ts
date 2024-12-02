import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  imports: [RouterLink, ButtonModule],
  templateUrl: './accessdenied.component.html',
})
export class AccessdeniedComponent {
  constructor(public layoutService: LayoutService) {}
}
