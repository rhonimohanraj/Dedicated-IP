import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'saas4-integration',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './integration.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntegrationComponent {
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#toolsPagination',
      clickable: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 2,
        spaceBetween: 4,
      },
      '600': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '991': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 38,
      },
    },
  }
}
