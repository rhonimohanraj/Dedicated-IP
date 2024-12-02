import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  constructor(public layoutService: LayoutService) {}
}
