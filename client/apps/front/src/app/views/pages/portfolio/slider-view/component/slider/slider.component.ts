import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { initBindSwiper } from '@helpers/swiper'
import { SwiperContainer } from 'swiper/element'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { sliderData } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'slider-view-slider',
  standalone: true,
  imports: [BreadcrumbComponent, RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderComponent implements AfterViewInit {
  sliderViewData = sliderData
  @ViewChild('sliderSwiper') sliderSwiper!: ElementRef<SwiperContainer>

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      prevEl: '.btn-prev',
      nextEl: '.btn-next',
    },
  }

  ngAfterViewInit(): void {
    initBindSwiper(this.sliderSwiper.nativeElement, this.swiperConfig)
  }
}
