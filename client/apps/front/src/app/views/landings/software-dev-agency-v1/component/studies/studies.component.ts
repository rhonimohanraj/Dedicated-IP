import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  type ElementRef,
} from '@angular/core'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { initBindSwiper } from '@helpers/swiper'
import type { JarallaxOptions } from 'jarallax'
import type { SwiperContainer } from 'swiper/element'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

@Component({
  selector: 'software-dev-agency1-studies',
  standalone: true,
  imports: [JarallaxDirective],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudiesComponent {
  @ViewChild('studySwipers')
  studySwipers!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#case-study-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#case-study-prev',
      nextEl: '#case-study-next',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.studySwipers.nativeElement, this.swiperConfig)
  }

  jarallaxConfig: JarallaxOptions = {
    speed: 0.4,
  }
}
