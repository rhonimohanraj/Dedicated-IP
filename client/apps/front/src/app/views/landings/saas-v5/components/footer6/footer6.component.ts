import { Component } from '@angular/core'
import { credits } from '@states/constants'
import {
  aiModels,
  footer6Link,
  footerIntegrationData,
  resourseData,
} from 'src/app/common/footer-items'

@Component({
  selector: 'app-footer6',
  standalone: true,
  imports: [],
  templateUrl: './footer6.component.html',
  styles: ``,
})
export class Footer6Component {
  socialLinks = footer6Link
  creditsBy = credits
  aiModelsData = aiModels
  resourseData = resourseData
  integrationData = footerIntegrationData
}
