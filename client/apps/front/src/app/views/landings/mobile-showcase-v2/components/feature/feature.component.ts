import { Component } from '@angular/core'
import { featureData } from '../../data'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'mobile-showcase-v2-feature',
  standalone: true,
  imports: [RellaxDirective],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  featureList = featureData
}
