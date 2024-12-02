import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { brandData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'software-dev-agency3-brands',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './brands.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandsComponent {
  logoList = brandData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#logopagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
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
