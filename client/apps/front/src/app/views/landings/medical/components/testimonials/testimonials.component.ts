import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonialData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'medical-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  patientList = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
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
        spaceBetween: 25,
      },
    },
  }
}
