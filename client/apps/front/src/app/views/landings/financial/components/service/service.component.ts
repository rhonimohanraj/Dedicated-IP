import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'

import { Navigation, Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'financial-service',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './service.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceComponent {
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#servicepagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '991': {
        slidesPerView: 3,
      },
    },
  }
}
