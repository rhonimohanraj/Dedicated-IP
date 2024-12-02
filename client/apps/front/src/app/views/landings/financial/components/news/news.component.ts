import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { newsData } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'financial-news',
  standalone: true,
  imports: [SwiperDirective, NgbTooltipModule],
  templateUrl: './news.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
  newsList = newsData

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
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
