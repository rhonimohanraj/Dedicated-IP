import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { appData } from '../../data'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'saas4-about',
  standalone: true,
  imports: [NgbNavModule, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  aboutList = appData
}
