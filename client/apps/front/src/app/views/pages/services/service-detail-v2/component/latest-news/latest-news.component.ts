import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { newsData } from '../../data'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperDirective } from '@components/swiper-directive.component'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'service-detail-v2-latest-news',
  standalone: true,
  imports: [SwiperDirective, NgbTooltipModule],
  templateUrl: './latest-news.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestNewsComponent {
  latestNewsData = newsData
  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '500': { slidesPerView: 2 },
      '1000': { slidesPerView: 3 },
    },
  }
}
