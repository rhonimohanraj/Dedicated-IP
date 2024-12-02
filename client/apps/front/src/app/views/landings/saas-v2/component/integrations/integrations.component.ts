import { Component } from '@angular/core'
import { integrationData } from '../../data'

@Component({
  selector: 'saas2-integrations',
  standalone: true,
  imports: [],
  templateUrl: './integrations.component.html',
  styles: ``,
})
export class IntegrationsComponent {
  toolsList = integrationData
}
