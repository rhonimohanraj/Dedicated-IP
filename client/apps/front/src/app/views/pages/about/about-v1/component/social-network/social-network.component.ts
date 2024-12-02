import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { socialNetworkData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { SwiperOptions } from 'swiper/types'
register()
@Component({
  selector: 'about-v1-social-network',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './social-network.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SocialNetworkComponent {
  aboutSocialNetworkData = socialNetworkData

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '650': {
        slidesPerView: 4,
      },
      '900': {
        slidesPerView: 5,
      },
      '1100': {
        slidesPerView: 6,
      },
    },
  }
}
