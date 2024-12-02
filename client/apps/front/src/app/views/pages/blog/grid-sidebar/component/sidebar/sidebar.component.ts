import { Component } from '@angular/core'
import { blogData } from '../../data'
import { NgxMasonryModule } from 'ngx-masonry'
import { RouterModule } from '@angular/router'
import { currentYear } from '@states/constants'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'grid-sidebar',
  standalone: true,
  imports: [
    NgxMasonryModule,
    RouterModule,
    NgbTooltipModule,
    LightgalleryModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  blogList = blogData
  currentYear = currentYear

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
