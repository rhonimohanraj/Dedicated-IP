import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContentComponent } from './component/content/content.component'
import { CommentComponent } from './component/comment/comment.component'
import { CommentFormComponent } from './component/comment-form/comment-form.component'
import { ArticleComponent } from './component/article/article.component'
import { HeroComponent } from './component/hero/hero.component'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    TopbarComponent,
    ContentComponent,
    CommentComponent,
    CommentFormComponent,
    ArticleComponent,
    HeroComponent,
    Breadcrumb2Component,
    Footer9Component,
  ],
  templateUrl: './single-post.component.html',
  styles: ``,
})
export class SinglePostComponent {}
