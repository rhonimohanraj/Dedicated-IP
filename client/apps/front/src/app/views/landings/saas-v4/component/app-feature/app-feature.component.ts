import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from '@helpers/parralax-directive'

@Component({
  selector: 'saas4-app-feature',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './app-feature.component.html',
  styles: ``,
})
export class AppFeatureComponent {}
