import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { brandData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Navigation, Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'digital-agency-brands',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './brands.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandsComponent {
  brandList = brandData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    navigation: {
      prevEl: '#prev-brand',
      nextEl: '#next-brand',
    },
    loop: true,
    pagination: {
      el: '#logospagination',
      clickable: true,
    },
    breakpoints: {
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
