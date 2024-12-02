import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { blogData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'software-dev-agency3-blog',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './blog.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogComponent {
  blogList = blogData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    autoplay: true,
    spaceBetween: 24,
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '#blogpagination',
      clickable: true,
    },
  }
}
