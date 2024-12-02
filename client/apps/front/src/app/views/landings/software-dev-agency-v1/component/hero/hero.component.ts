import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { herosliderData } from '../../data'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import type { JarallaxOptions } from 'jarallax'
register()

@Component({
  selector: 'software-dev-agency1-hero',
  standalone: true,
  imports: [SwiperDirective, JarallaxDirective],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroComponent {
  sliderList = herosliderData

  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
  }

  swiperConfig: SwiperOptions = {
    modules: [Navigation, EffectFade, Pagination],
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#hero-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#hero-prev',
      nextEl: '#hero-next',
    },
  }
}
