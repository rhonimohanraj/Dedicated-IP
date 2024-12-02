import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'

import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import { testimonialData } from '../../data'
register()

@Component({
  selector: 'sass3-testimonials',
  standalone: true,
  imports: [NgbRatingModule, SwiperDirective],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  clientList = testimonialData

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
