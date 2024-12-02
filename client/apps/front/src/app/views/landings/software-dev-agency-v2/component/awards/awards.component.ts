import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { awardData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'software-dev-agency2-awards',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './awards.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AwardsComponent {
  awardList = awardData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
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
      el: '#awardPagination',
      clickable: true,
    },
  }
}
