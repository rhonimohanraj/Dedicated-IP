import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { courseData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { currency } from '@states/constants'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()
@Component({
  selector: 'single-course-courses',
  standalone: true,
  imports: [SwiperDirective, NgbTooltipModule],
  templateUrl: './courses.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesComponent {
  singleCourseData = courseData
  selectedCurrency = currency
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
