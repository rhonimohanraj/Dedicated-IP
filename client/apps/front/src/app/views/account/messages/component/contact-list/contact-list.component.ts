import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core'
import { contactData, ContactType } from '../../data'
import { CommonModule } from '@angular/common'
import { SwiperDirective } from '@components/swiper-directive.component'
import type { SwiperOptions } from 'swiper/types'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'

import { register } from 'swiper/element'
import { Router } from '@angular/router'
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
register()

@Component({
  selector: 'messages-contact-list',
  standalone: true,
  imports: [CommonModule, SwiperDirective, FormsModule],
  templateUrl: './contact-list.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './contact-list.component.scss',
})
export class ContactListComponent {
  @Output() profileDetail = new EventEmitter<ContactType>()
  activeOffcanvas = inject(NgbActiveOffcanvas)

  contactData = contactData
  activeIndex: number = 0
  searchterm: any

  swiperConfig: SwiperOptions = {
    modules: [Mousewheel, Scrollbar, FreeMode],
    direction: 'vertical',
    slidesPerView: 7.6,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  }

  getDetail(id: number) {
    this.activeIndex = id
    const data = this.contactData[id]
    this.profileDetail.emit(data)
  }

  searchContact() {
    if (this.searchterm) {
      this.contactData = contactData.filter((contact: any) =>
        contact.user.name.toLowerCase().includes(this.searchterm.toLowerCase())
      )
    } else {
      this.contactData = contactData
    }
  }
}
