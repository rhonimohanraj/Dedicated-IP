import { Component } from '@angular/core'
import { featureData } from '../../data'

@Component({
  selector: 'medical-feature-icons',
  standalone: true,
  imports: [],
  templateUrl: './feature-icons.component.html',
  styles: ``,
})
export class FeatureIconsComponent {
  featureData = featureData
}
