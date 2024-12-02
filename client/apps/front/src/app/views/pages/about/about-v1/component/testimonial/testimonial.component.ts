import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { testimonialData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
register()
@Component({
  selector: 'about-v1-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  allTestimonialData = testimonialData

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
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
