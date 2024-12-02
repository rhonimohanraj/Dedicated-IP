import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { SwiperOptions } from 'swiper/types'
import { workData, workType } from '../data'
import { SwiperContainer } from 'swiper/element'
import { Navigation, Pagination } from 'swiper/modules'
import { initBindSwiper } from 'src/app/helpers/swiper'

@Component({
  selector: 'mobile-show-case-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WorkComponent {
  worksData: workType[] = workData

  @ViewChild('workingSwipers')
  workingSwipers!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '#swiper-progress',
      type: 'progressbar',
    },
    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
    breakpoints: {
      '768': { slidesPerView: 3 },
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.workingSwipers.nativeElement, this.swiperConfig)
  }
}
