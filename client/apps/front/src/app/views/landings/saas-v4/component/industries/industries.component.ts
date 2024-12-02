import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
import { industryData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { initBindSwiper } from 'src/app/helpers/swiper'
import type { SwiperContainer } from 'swiper/element'
import { Navigation } from 'swiper/modules'

@Component({
  selector: 'saas4-industries',
  standalone: true,
  imports: [],
  templateUrl: './industries.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent implements AfterViewInit {
  industryList = industryData

  @ViewChild('industrySwipers')
  industrySwipers!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: '#prev-industry',
      nextEl: '#next-industry',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.industrySwipers.nativeElement, this.swiperConfig)
  }
}
