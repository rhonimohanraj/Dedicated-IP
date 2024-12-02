import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { brandsData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { RouterModule } from '@angular/router'
register()
@Component({
  selector: 'about-v3-states',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './states.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatesComponent {
  brandsList = brandsData

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
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
