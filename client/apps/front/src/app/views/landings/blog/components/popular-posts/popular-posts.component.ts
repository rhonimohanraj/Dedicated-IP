import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { blogData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'blog-popular-posts',
  standalone: true,
  imports: [SwiperDirective, RouterModule, NgbTooltipModule],
  templateUrl: './popular-posts.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularPostsComponent {
  postList = blogData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '#popular-pagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '576': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  }
}
