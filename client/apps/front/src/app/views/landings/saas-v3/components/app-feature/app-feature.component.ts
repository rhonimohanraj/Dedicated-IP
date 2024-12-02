import { Component } from '@angular/core'
import { ParallaxMouseMoveDirective } from 'src/app/helpers/parralax-directive'

@Component({
  selector: 'sass3-app-feature',
  standalone: true,
  imports: [ParallaxMouseMoveDirective],
  templateUrl: './app-feature.component.html',
  styles: ``,
})
export class AppFeatureComponent {}
