import { Route } from '@angular/router'
import { ListSidebarComponent } from './list-sidebar/list-sidebar.component'
import { GridSidebarComponent } from './grid-sidebar/grid-sidebar.component'
import { ListNoSidebarComponent } from './list-no-sidebar/list-no-sidebar.component'
import { SimpleFeedComponent } from './simple-feed/simple-feed.component'
import { SinglePostComponent } from './single-post/single-post.component'
import { PodcastComponent } from './podcast/podcast.component'
import { GridNoSidebarComponent } from './grid-no-sidebar/grid-no-sidebar.component'

export const BLOG_ROUTES: Route[] = [
  {
    path: 'list-sidebar',
    component: ListSidebarComponent,
    data: { title: 'Blog List With Sidebar' },
  },
  {
    path: 'grid-sidebar',
    component: GridSidebarComponent,
    data: { title: 'Blog Grid With Sidebar' },
  },
  {
    path: 'grid',
    component: GridNoSidebarComponent,
    data: { title: 'Blog List No Sidebar' },
  },
  {
    path: 'list',
    component: ListNoSidebarComponent,
    data: { title: 'Blog List No Sidebar' },
  },
  {
    path: 'simple-feed',
    component: SimpleFeedComponent,
    data: { title: 'Blog Simple Feed' },
  },
  {
    path: 'single-post',
    component: SinglePostComponent,
    data: { title: 'Blog Simple Post' },
  },
  {
    path: 'podcast',
    component: PodcastComponent,
    data: { title: 'Blog Podcast' },
  },
]
