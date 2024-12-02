import { Component } from '@angular/core'
import { courseData } from './data'
import { RouterModule } from '@angular/router'
import { currency } from '@states/constants'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-saved-items',
  standalone: true,
  imports: [RouterModule, NgbTooltipModule],
  templateUrl: './saved-items.component.html',
  styles: ``,
})
export class SavedItemsComponent {
  items = courseData
  selectedCurrency = currency
}
