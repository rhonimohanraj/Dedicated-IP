import { Component } from '@angular/core'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { CommentComponent } from './component/comment/comment.component'
import { CommentFormComponent } from './component/comment-form/comment-form.component'
import { Podcast2Component } from './component/podcast/podcast.component'
import { ContentComponent } from './component/content/content.component'
import { HeroComponent } from './component/hero/hero.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [
    TopbarComponent,
    Breadcrumb2Component,
    CommentComponent,
    CommentFormComponent,
    Podcast2Component,
    ContentComponent,
    HeroComponent,
    Footer9Component,
  ],
  templateUrl: './podcast.component.html',
  styles: ``,
})
export class PodcastComponent {}
