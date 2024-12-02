import { Component } from '@angular/core'
import { blogData } from '../../data'

@Component({
  selector: 'simple-feed-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styles: ``,
})
export class BlogCardComponent {
  feedBlogCard = blogData
}
