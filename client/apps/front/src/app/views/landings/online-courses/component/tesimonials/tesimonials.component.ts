import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { testimonialData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Navigation, Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()

@Component({
  selector: 'online-tesimonials',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './tesimonials.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TesimonialsComponent {
  userList = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#swiper-pagination1',
      clickable: true,
    },
    navigation: {
      prevEl: '#testimonials-prev',
      nextEl: '#testimonials-next',
    },
  }
}
