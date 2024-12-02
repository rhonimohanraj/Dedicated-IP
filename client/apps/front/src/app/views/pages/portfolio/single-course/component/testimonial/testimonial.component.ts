import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { testimonialData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { Pagination } from 'swiper/modules'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

register()
@Component({
  selector: 'single-course-testimonial',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  singleCourseTestimonialData = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '1000': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '1500': {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  }
}
