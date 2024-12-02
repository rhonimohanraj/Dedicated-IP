import { Component } from '@angular/core'
import { FeaturesContent, featuresContent } from '../data'
import { RellaxDirective } from '@helpers/rellax-directive'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'mobile-show-case-feature',
  standalone: true,
  imports: [RellaxDirective, CommonModule],
  templateUrl: './feature.component.html',
  styles: ``,
})
export class FeatureComponent {
  allFeaturesData: FeaturesContent[] = featuresContent
}
