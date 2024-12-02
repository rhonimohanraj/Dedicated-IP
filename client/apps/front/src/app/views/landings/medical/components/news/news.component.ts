import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { newsData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'

import { register } from 'swiper/element'
import { Navigation, Pagination } from 'swiper/modules'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'medical-news',
  standalone: true,
  imports: [SwiperDirective, NgbTooltipModule],
  templateUrl: './news.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
  newsData = newsData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
