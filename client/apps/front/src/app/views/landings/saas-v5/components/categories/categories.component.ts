import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { categoriesData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'

import { register } from 'swiper/element'
register()

@Component({
  selector: 'sass5-categories',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './categories.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent {
  categoryList = categoriesData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '960': {
        slidesPerView: 3,
      },
    },
  }
}
