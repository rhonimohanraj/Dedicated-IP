import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { brandData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
register()
@Component({
  selector: 'about-v2-brand-swiper',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './brand-swiper.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandSwiperComponent {
  allBrandData = brandData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    breakpoints: {
      '400': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '500': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  }
}
