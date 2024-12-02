import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { feedData } from '../../data'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'simple-feed-content',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './content.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentComponent {
  feedBlogData = feedData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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
