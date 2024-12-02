import Swiper from 'swiper'
import type { SwiperContainer } from 'swiper/element'
import { Controller, Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { CommonModule } from '@angular/common'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
import { initBindSwiper } from '@helpers/swiper'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'

import { testimonialData } from '../../data'

@Component({
  selector: 'digital-agency-testimonial',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent implements AfterViewInit {
  testimonialList = testimonialData
  page = 1
  currentPage: number = 1
  totalPages: number = 3

  @ViewChild('authorSwiper') authorSwiper!: ElementRef<SwiperContainer>
  swiperInstance: Swiper | null = null

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, Controller],
    spaceBetween: 24,
    loop: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
      type: 'custom',
    },
    navigation: {
      prevEl: '.page-prev',
      nextEl: '.page-next',
    },
    on: {
      afterInit: (swiper) => {
        this.totalPages = swiper.slides.length || 0
      },
      slideChange: (swiper) => {
        this.currentPage = swiper.realIndex + 1
      },
    },
  }

  ngAfterViewInit() {
    this.swiperInstance = initBindSwiper(
      this.authorSwiper.nativeElement,
      this.swiperConfig
    )
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1)
  }

  pageChange(page: number) {
    this.swiperInstance?.slideTo(page)
  }
}
