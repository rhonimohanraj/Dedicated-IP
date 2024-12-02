import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonialData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Navigation, Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'conference-testimonials',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  testimonialData = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 12,
    loop: true,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
    },
  }
}
