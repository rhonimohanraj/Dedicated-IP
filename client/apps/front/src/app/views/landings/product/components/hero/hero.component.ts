import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

import type { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules'
import { LightgalleryModule } from 'lightgallery/angular'
register()

@Component({
  selector: 'product-hero',
  standalone: true,
  imports: [SwiperDirective, LightgalleryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
    slidesPerView: 1,
    effect: 'coverflow',
    centeredSlides: true,
    loop: true,
    speed: 650,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 560,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      prevEl: '.btn-prev',
      nextEl: '.btn-next',
    },
  }
}
