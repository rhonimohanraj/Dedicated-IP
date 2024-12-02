import { Component } from '@angular/core'
import { moreFeatureData } from '@views/home/data'

@Component({
  selector: 'app-more-feature',
  standalone: true,
  imports: [],
  templateUrl: './more-feature.component.html',
  styles: ``,
})
export class MoreFeatureComponent {
  moreFeatures = moreFeatureData
}
