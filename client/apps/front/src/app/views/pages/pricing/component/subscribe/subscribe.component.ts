import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Renderer2,
  inject,
} from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { SwiperOptions } from 'swiper/types'
import { brandData } from '../../data'
import { register } from 'swiper/element'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Pagination } from 'swiper/modules'
register()
@Component({
  selector: 'pricing-subscribe',
  standalone: true,
  imports: [SwiperDirective, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './subscribe.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubscribeComponent {
  subscribeNBrandData = brandData

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  }

  contactForm!: UntypedFormGroup
  submit!: boolean

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required]],
    })
  }

  // return forms
  get form() {
    return this.contactForm.controls
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }
}
