import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { featureData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'financial-features',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './features.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesComponent {
  featureList = featureData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 8,
    pagination: {
      el: '#featurepagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '800': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  }
}
