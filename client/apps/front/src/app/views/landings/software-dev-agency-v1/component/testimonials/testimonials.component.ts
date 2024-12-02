import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonialData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'

import { register } from 'swiper/element'
import { Navigation, Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'software-dev-agency1-testimonials',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonialData = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination2',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonial-prev',
      nextEl: '#testimonial-next',
    },
  }
}
