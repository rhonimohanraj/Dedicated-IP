import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { courses, popularCourseData } from '../../data'
import { register } from 'swiper/element'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { currency } from '@states/constants'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'online-popular-courses',
  standalone: true,
  imports: [SwiperDirective, CommonModule, RouterModule, NgbTooltipModule],
  templateUrl: './courses.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesComponent {
  courseList = courses
  popularCourseList = popularCourseData
  selectedCurrency = currency

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '#pagination1',
      clickable: true,
    },
    navigation: {
      prevEl: '#popular-prev',
      nextEl: '#popular-next',
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 1,
      },
      '850': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  }
}
