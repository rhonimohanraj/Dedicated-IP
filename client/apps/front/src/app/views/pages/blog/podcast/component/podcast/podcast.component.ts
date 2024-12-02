import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { podcastData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'podcast',
  standalone: true,
  imports: [SwiperDirective, RouterModule, NgbTooltipModule],
  templateUrl: './podcast.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Podcast2Component {
  podcastList = podcastData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  }
}
