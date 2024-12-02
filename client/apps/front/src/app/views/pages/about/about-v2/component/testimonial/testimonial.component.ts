import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { testimonialData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
register()
@Component({
  selector: 'about-v2-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonialList = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 24,
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
