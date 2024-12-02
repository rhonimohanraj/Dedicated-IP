import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { caseStudyData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'software-dev-agency2-studies',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './studies.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudiesComponent {
  studyList = caseStudyData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: '#studypagination',
      clickable: true,
    },
  }
}
