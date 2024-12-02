import { Component } from '@angular/core'
import { faqsData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@states/constants'

@Component({
  selector: 'single-course-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  selectedCurrency = currency
  singleCoursefaqsData = faqsData
}
