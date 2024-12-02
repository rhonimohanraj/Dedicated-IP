import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { brandData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'conference-sponsors',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './sponsors.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SponsorsComponent {
  sponsorList = brandData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: '#sponsorpagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '650': {
        slidesPerView: 4,
      },
      '900': {
        slidesPerView: 5,
      },
      '1100': {
        slidesPerView: 6,
      },
    },
  }
}
