import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { workToolsData } from '../../data'
import { Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'saas1-integrations',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './integrations.component.html',
  styles: ``,
})
export class IntegrationsComponent {
  integrationList = workToolsData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 8,
    pagination: {
      el: '#toolspagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '600': {
        slidesPerView: 4,
      },
      '768': {
        slidesPerView: 5,
      },
      '850': {
        slidesPerView: 6,
      },
      '1000': {
        slidesPerView: 7,
      },
      '1200': {
        slidesPerView: 8,
      },
    },
  }
}
