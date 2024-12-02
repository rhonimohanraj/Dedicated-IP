import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import type { SwiperOptions } from 'swiper/types'
import { register } from 'swiper/element'
import { SwiperDirective } from 'src/app/components/swiper-directive.component'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { userShotsImages } from '../../data'
register()

@Component({
  selector: 'product-gallery',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.component.html',
  styles: ``,
})
export class GalleryComponent {
  imageList = userShotsImages
  reverseimageList = userShotsImages.reverse()

  swiperConfig: SwiperOptions = {
    modules: [FreeMode, Autoplay],
    loop: true,
    grabCursor: false,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    speed: 38000,
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '500': {
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  }
}
