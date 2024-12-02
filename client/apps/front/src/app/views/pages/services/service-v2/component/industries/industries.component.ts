import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { featureData } from '../../data'

@Component({
  selector: 'service-v2-industries',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './industries.component.html',
  styles: ``,
})
export class IndustriesComponent {
  serviceIndustriesData = featureData
}
