import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'

import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { statData } from '../../data'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'mobile-showcase-v3-benefits',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './benefits.component.html',
  styles: ``,
})
export class BenefitsComponent {
  statData = statData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
    },
  }
}
