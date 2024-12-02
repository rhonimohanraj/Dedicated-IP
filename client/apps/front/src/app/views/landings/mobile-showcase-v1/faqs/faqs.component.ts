import { Component } from '@angular/core'
import { MobileShowFaqType, mobileShowCaseFaqs } from '../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'mobile-show-case-faqs',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  mobileFaqsData: MobileShowFaqType[] = mobileShowCaseFaqs
}
