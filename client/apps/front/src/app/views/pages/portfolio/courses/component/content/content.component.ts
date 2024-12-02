import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { courseData } from '../../data'
import {
  NgbPaginationModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { currency } from '@states/constants'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'courses-content',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NgbPaginationModule,
    NgbTooltipModule,
    CommonModule,
  ],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  selectedCurrency = currency
  courseContentData = courseData
  page = 1;
}
