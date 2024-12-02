import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { newsData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { RouterModule } from '@angular/router'
register()

@Component({
  selector: 'software-dev-agency1-news',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './news.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
  newsList = newsData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,
    pagination: {
      el: '#news-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#news-prev',
      nextEl: '#news-next',
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '560': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  }
}
