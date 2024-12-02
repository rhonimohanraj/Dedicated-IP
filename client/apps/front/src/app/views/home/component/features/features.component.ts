import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { AnimationItem } from 'ngx-lottie/lib/symbols'
import { LottieComponent, type AnimationOptions } from 'ngx-lottie'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { basePath } from 'src/app/states/constants'

register()

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [LottieComponent, SwiperDirective],
  templateUrl: './features.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesComponent {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '700': {
        slidesPerView: 3,
      },
      '1000': {
        slidesPerView: 4,
      },
    },
  }

  options1: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-1-light.json`,
    loop: true,
  }

  options2: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-1-dark.json`,
    loop: true,
  }

  options3: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-2-light.json`,
    loop: true,
  }

  options4: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-2-dark.json`,
    loop: true,
  }

  options5: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-3-light.json`,
    loop: true,
  }

  options6: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-3-dark.json`,
    loop: true,
  }

  options7: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-4-light.json`,
    loop: true,
  }

  options8: AnimationOptions = {
    path: `${basePath}/assets/json/animation-feature-4-dark.json`,
    loop: true,
  }

  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(1.25)
    animationItem.loop = true
  }
}
