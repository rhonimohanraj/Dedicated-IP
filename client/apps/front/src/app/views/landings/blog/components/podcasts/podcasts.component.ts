import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { podcastData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { Pagination } from 'swiper/modules'
import { register } from 'swiper/element'
import { RouterModule } from '@angular/router'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
register()
@Component({
  selector: 'blog-podcasts',
  standalone: true,
  imports: [SwiperDirective, RouterModule, NgbTooltipModule],
  templateUrl: './podcasts.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PodcastsComponent {
  podcastList = podcastData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '#podcast-pagination',
      clickable: true,
    },
    breakpoints: {
      '576': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
