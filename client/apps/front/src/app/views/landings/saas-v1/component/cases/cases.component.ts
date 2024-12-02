import { Component } from '@angular/core'
import { useCasesData } from '../../data'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'saas1-cases',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './cases.component.html',
  styles: ``,
})
export class CasesComponent {
  useCaseList = useCasesData
}
