import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { articleData } from '../../data'
import type { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { JarallaxOptions } from 'jarallax'

import { register } from 'swiper/element'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'
import { RouterModule } from '@angular/router'
register()

@Component({
  selector: 'blog-hero',
  standalone: true,
  imports: [
    JarallaxDirective,
    BreadcrumbComponent,
    SwiperDirective,
    RouterModule,
  ],
  templateUrl: './hero.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  articleData = articleData

  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
  }

  swiperConfig: SwiperOptions = {
    modules: [Mousewheel, Scrollbar, FreeMode],
    direction: 'vertical',
    slidesPerView: 3.6,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 25,
    freeMode: true,
    mousewheel: true,
  }
}
