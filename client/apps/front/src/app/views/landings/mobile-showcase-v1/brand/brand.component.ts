import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FeatureLogos, FeatureType } from '../data'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { Pagination } from 'swiper/modules'

register()
@Component({
  selector: 'mobile-show-case-brand',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './brand.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BrandComponent {
  featureLogoData: FeatureType[] = FeatureLogos

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    pagination: {
      el: '#pagination4',
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
