import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonialData } from '../../data'

import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'saas1-testimonials',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  clientList = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonials-prev',
      nextEl: '#testimonials-next',
    },
  }
}
