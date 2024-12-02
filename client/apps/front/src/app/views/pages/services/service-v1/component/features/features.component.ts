import { Component } from '@angular/core'
import { featureData } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'service-v1-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styles: ``,
})
export class FeaturesComponent {
  serviceFeature = featureData
}
