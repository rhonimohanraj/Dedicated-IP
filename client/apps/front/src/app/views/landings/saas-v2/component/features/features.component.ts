import { Component } from '@angular/core'
import { featureData } from '../../data'

@Component({
  selector: 'saas2-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styles: ``,
})
export class FeaturesComponent {
  featureList = featureData
}
