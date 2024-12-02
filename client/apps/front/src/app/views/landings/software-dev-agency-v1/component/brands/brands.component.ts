import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { brandData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'software-dev-agency1-brands',
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
      el: '#logoPagination',
      clickable: true,
    },
    breakpoints: {
      '400': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '500': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  }
}
