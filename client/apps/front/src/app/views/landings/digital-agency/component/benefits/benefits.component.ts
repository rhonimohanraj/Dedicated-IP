import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { featureData } from '../../data'
import { CommonModule } from '@angular/common'
import { Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'digital-agency-benefits',
  standalone: true,
  imports: [SwiperDirective, CommonModule],
  templateUrl: './benefits.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BenefitsComponent {
  benefitsList = featureData

  swiperCongfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#pagination2',
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
