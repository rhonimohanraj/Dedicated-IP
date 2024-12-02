import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { brandsData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'online-brands',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './brands.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandsComponent {
  brandsData = brandsData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#brandspagination',
      clickable: true,
    },
    breakpoints: {
      '400': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '500': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  }
}
