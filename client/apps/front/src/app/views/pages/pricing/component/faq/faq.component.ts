import { Component } from '@angular/core'
import { faqsData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'pricing-faq',
  standalone: true,
  imports: [NgbAccordionModule, RouterModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  pricingFaq = faqsData
}
