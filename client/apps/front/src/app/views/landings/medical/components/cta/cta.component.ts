import { Component, ViewChild, type ElementRef } from '@angular/core'
import type { SwiperOptions } from 'swiper/types'
import { ctaData } from '../../data'
import type { SwiperContainer } from 'swiper/element'
import { initBindSwiper } from '@helpers/swiper'
import { Navigation } from 'swiper/modules'

@Component({
  selector: 'medical-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  ctaData = ctaData

  @ViewChild('ctaSwipers')
  ctaSwipers!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.ctaSwipers.nativeElement, this.swiperConfig)
  }
}
