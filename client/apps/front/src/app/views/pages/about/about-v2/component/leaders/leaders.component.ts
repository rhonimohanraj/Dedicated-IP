import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { leaderData } from '../../data'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
register()
@Component({
  selector: 'about-v2-leaders',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './leaders.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeadersComponent {
  leaderShip = leaderData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '480': {
        slidesPerView: 2,
      },
      '700': {
        slidesPerView: 3,
      },
      '900': {
        slidesPerView: 4,
      },
      '1160': {
        slidesPerView: 5,
      },
      '1500': {
        slidesPerView: 6,
      },
    },
  }
}
