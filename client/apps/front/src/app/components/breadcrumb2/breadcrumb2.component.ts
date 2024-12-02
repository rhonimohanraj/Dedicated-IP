import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-breadcrumb2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb2.component.html',
  styles: ``,
})
export class Breadcrumb2Component {
  @Input() link!: string
  @Input() title!: string
  @Input() pageTitle!: string
  @Input() className!: string
}
