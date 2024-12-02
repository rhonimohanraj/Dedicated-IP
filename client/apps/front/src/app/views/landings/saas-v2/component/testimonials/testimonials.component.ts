import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import type { SwiperOptions } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import { register } from 'swiper/element'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { testimonialData } from '../../data'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()

@Component({
  selector: 'saas2-testimonials',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  peopleList = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    navigation: {
      prevEl: '#prev-testimonial',
      nextEl: '#next-testimonial',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  }
}
