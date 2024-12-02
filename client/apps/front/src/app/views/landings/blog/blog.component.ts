import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { PopularPostsComponent } from './components/popular-posts/popular-posts.component'
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component'
import { PodcastsComponent } from './components/podcasts/podcasts.component'
import { SubscriptionComponent } from './components/subscription/subscription.component'
import { Footer9Component } from './components/footer9/footer9.component'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    PopularPostsComponent,
    LatestPostsComponent,
    PodcastsComponent,
    SubscriptionComponent,
    Footer9Component,
  ],
  templateUrl: './blog.component.html',
  styles: ``,
})
export class BlogComponent {}
