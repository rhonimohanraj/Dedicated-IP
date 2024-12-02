import { Component } from '@angular/core'
import { blogData } from '../../data'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'grid-no-sidebar-content',
  standalone: true,
  imports: [RouterModule, NgbTooltipModule],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  gridNosidebarblogData = blogData
}
