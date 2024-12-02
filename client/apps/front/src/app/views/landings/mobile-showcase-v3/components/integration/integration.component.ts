import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
register()

@Component({
  selector: 'mobile-showcase-v3-integration',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './integration.component.html',
  styles: ``,
})
export class IntegrationComponent {
  SwiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 12,
    pagination: {
      el: '#pagination4',
      clickable: true,
    },
    breakpoints: {
      '300': {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      '500': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  }
}
