import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { mobileShowcaseTestimonial, testimonialType } from '../data'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

register()
@Component({
  selector: 'mobile-show-case-testimonial',
  standalone: true,
  imports: [SwiperDirective, NgbRatingModule],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {
  testimonialData: testimonialType[] = mobileShowcaseTestimonial

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 8,
    navigation: {
      prevEl: '#prev-review',
      nextEl: '#next-review',
    },
    loop: true,
    breakpoints: {
      '600': { slidesPerView: 2 },
    },
  }
}
