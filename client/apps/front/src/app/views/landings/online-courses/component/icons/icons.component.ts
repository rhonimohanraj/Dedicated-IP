import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { featureData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'online-icons',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './icons.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconsComponent {
  featureData = featureData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 8,
    pagination: {
      el: '#iconpagination',
      clickable: true,
    },
    breakpoints: {
      '600': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
