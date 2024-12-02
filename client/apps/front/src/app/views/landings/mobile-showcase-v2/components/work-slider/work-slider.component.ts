import {
  Component,
  ViewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
import { processData } from '../../data'

import type { SwiperOptions } from 'swiper/types'
import { Navigation } from 'swiper/modules'
import { initBindSwiper } from '@helpers/swiper'
import type { SwiperContainer } from 'swiper/element'

@Component({
  selector: 'mobile-showcase-v2-work-slider',
  standalone: true,
  imports: [],
  templateUrl: './work-slider.component.html',
  styleUrl: './work-slider.component.scss',
})
export class WorkSliderComponent implements AfterViewInit {
  workList = processData

  @ViewChild('workSwiper') workSwiper!: ElementRef<SwiperContainer>

  SwiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.workSwiper.nativeElement, this.SwiperConfig)
  }
}
