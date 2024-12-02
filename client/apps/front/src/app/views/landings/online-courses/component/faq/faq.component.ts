import { Component } from '@angular/core'
import { faqsData } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'online-faq',
  standalone: true,
  imports: [NgbAccordionModule, RellaxDirective],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  faqsData = faqsData
}
