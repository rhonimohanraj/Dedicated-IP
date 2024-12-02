import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { benefitsData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'about-v1-feature',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './feature.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureComponent {
  benefitFeature = benefitsData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '991': {
        slidesPerView: 3,
      },
    },
  }
}
