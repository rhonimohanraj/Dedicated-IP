import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { benefitsData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'software-dev-agency3-benefits',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './benefits.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BenefitsComponent {
  benefitsList = benefitsData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    autoplay: true,
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
      '1200': {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: '#benefitpagination',
      clickable: true,
    },
  }
}
