import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { memberData } from '../../data'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
import { SwiperDirective } from '@components/swiper-directive.component'
register()

@Component({
  selector: 'service-detail-v2-team',
  standalone: true,
  imports: [NgbRatingModule, SwiperDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamComponent {
  serviceMemberData = memberData
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    breakpoints: {
      '500': { slidesPerView: 1 },
      '700': { slidesPerView: 3 },
      '991': { slidesPerView: 4 },
    },
  }
}
