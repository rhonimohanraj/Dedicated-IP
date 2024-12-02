import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  viewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'

import type { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperContainer } from 'swiper/element'
import { initBindSwiper } from '@helpers/swiper'

@Component({
  selector: 'mobile-showcase-v3-work-slider',
  standalone: true,
  imports: [],
  templateUrl: './work-slider.component.html',
  styleUrl: './work-slider.component.scss',
})
export class WorkSliderComponent implements AfterViewInit {
  @ViewChild('workSwiper') workSwiper!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#stepsPagination',
      type: 'fraction',
    },
    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.workSwiper.nativeElement, this.swiperConfig)
  }
}
