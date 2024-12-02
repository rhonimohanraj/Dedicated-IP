import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { testimonialData } from '../../data'
import { initBindSwiper } from '@helpers/swiper'
import { SwiperContainer } from 'swiper/element'

@Component({
  selector: 'service-v1-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent implements AfterViewInit {
  serviceAuthorData = testimonialData

  @ViewChild('testimonialSwiper')
  testimonialSwiper!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.testimonialSwiper.nativeElement, this.swiperConfig)
  }
}
