import { Component } from '@angular/core'
import { featuresData } from '../../data'

@Component({
  selector: 'saas1-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  featureList = featuresData
}
