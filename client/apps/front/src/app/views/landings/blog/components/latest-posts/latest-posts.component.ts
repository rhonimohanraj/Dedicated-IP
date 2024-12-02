import { Component } from '@angular/core'
import { blogData, categories } from '../../data'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'blog-latest-posts',
  standalone: true,
  imports: [RouterModule, NgbTooltipModule],
  templateUrl: './latest-posts.component.html',
  styles: ``,
})
export class LatestPostsComponent {
  categoryList = categories
  postList = blogData.slice(0, 4)
}
