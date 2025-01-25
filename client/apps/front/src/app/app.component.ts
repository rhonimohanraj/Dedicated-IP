import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { BackToTopComponent } from './components/back-to-top/back-to-top.component'
import { PreloaderComponent } from './components/preloader/preloader.component'
import { TitleService } from '@core/services/title.service'
import { FirebaseComponent, TawkComponent } from '@dedicated-ip/service';
import {CrispComponent} from "../../../../libs/services/src/lib/crisp/crisp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BackToTopComponent,
    PreloaderComponent,
    FirebaseComponent,
    TawkComponent,
    CrispComponent,
  ],
  styles: `
    :host(app-root) {
      display: contents;
    }
  `,
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private titleService: TitleService) {}
  ngOnInit(): void {
    this.titleService.init();
  }
}
