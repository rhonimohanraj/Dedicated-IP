import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  type ElementRef,
} from '@angular/core'
import { industryData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { initBindSwiper } from '@helpers/swiper'
import type { SwiperContainer } from 'swiper/element'
import { Navigation } from 'swiper/modules'

@Component({
  selector: 'financial-industries',
  standalone: true,
  imports: [],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndustriesComponent {
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
