import { Component } from '@angular/core'
import { blogData } from '../../data'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'digital-agency-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbTooltipModule],
  templateUrl: './blog.component.html',
  styles: ``,
})
export class BlogComponent {
  blogList = blogData
}
