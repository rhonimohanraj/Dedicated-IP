import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { FeaturesComponent } from './component/features/features.component'
import { LandingPagesComponent } from './component/landing-pages/landing-pages.component'
import { MoreFeatureComponent } from './component/more-feature/more-feature.component'
import { Footer1Component } from './component/footer1/footer1.component'
import Rellax from 'rellax'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopbarComponent,
    ScrollToModule,
    FeaturesComponent,
    LandingPagesComponent,
    MoreFeatureComponent,
    Footer1Component,
  ],
  templateUrl: './home.component.html',
  styles: `
    :host(app-home) {
      display: contents;
    }
  `,
  providers: [ScrollToService],
})
export class HomeComponent {
  ngOnInit(): void {
    new Rellax('.rellax')
  }
}
