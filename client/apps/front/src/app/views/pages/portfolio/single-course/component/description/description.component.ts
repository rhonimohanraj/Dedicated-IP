import { Component } from '@angular/core'
import { programDetailData } from '../../data'
import { currency } from '@states/constants'

@Component({
  selector: 'single-course-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styles: ``,
})
export class DescriptionComponent {
  selectedCurrency = currency
  programDetailData = programDetailData
}
