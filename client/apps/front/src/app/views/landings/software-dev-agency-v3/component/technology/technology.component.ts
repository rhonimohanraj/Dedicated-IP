import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'software-dev-agency3-technology',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './technology.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TechnologyComponent {
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    autoplay: true,
    breakpoints: {
      '0': {
        slidesPerView: 2,
      },
      '500': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 6,
      },
    },
    pagination: {
      el: '#technologypagination',
      clickable: true,
    },
  }
}
