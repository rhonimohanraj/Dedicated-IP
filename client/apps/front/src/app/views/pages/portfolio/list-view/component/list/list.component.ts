import { Component } from '@angular/core'
import { listData } from '../../data'
import { CommonModule } from '@angular/common'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'list-view-list',
  standalone: true,
  imports: [CommonModule, RellaxDirective],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  listViewData = listData
}
