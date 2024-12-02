import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
import { industryData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import type { SwiperContainer } from 'swiper/element'
import { initBindSwiper } from '@helpers/swiper'
import { Navigation } from 'swiper/modules'

@Component({
  selector: 'software-dev-agency3-industries',
  standalone: true,
  imports: [],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent implements AfterViewInit {
  industryList = industryData

  @ViewChild('workingSwipers')
  workingSwipers!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#prev-industry',
      nextEl: '#next-industry',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.workingSwipers.nativeElement, this.swiperConfig)
  }
}
