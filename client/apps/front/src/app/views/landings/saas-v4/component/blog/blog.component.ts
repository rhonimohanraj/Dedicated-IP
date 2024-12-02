import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { blogData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'saas4-blog',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './blog.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogComponent {
  blogList = blogData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#blogpagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  }
}
