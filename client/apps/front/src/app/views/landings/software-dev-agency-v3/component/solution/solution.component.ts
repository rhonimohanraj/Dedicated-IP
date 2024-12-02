import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { solutionData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'software-dev-agency3-solution',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './solution.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolutionComponent {
  solutionList = solutionData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '500': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: '#solutionPagination',
      clickable: true,
    },
  }
}
