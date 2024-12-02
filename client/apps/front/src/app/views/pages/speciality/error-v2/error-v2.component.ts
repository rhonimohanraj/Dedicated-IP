import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'
import { credits } from '@states/constants'

@Component({
  selector: 'app-error-v2',
  standalone: true,
  imports: [TopbarComponent, ParallaxMouseMoveDirective, RouterModule],
  templateUrl: './error-v2.component.html',
  styles: `
    :host(app-error-v2) {
      height: 100%;
      overflow: hidden;
    }
  `,
})
export class ErrorV2Component {
  creditsBy = credits
}
