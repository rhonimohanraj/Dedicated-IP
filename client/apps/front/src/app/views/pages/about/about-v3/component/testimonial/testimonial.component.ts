import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { testimonialData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
register()
@Component({
  selector: 'about-v3-testimonial',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonialData = testimonialData
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    loop: true,
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    },
  }
}
