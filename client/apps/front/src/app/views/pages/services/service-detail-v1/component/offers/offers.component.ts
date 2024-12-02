import { Component } from '@angular/core'
import { featureData } from '../../data'

@Component({
  selector: 'service-detail-v1-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styles: ``,
})
export class OffersComponent {
  offerFeatureData = featureData
}
