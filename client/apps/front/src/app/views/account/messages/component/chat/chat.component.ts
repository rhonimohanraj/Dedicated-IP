import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  output,
} from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'

import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'
import { register } from 'swiper/element'
import type { SwiperOptions } from 'swiper/types'
import { chatData, contactData, ContactType } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'
register()

@Component({
  selector: 'messages-chat',
  standalone: true,
  imports: [
    SwiperDirective,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './chat.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  chatData = chatData
  formData!: UntypedFormGroup
  message!: string

  @Output() openOffCanvas = new EventEmitter<void>()
  @Input() contactDetail!: ContactType
  constructor(private formBuilder: UntypedFormBuilder) {}

  swiperConfig: SwiperOptions = {
    modules: [Mousewheel, Scrollbar, FreeMode],
    direction: 'vertical',
    freeMode: true,
    autoHeight: true,
    slidesPerView: 'auto',
    scrollbar: {
      el: '#swiper-scrollbar',
    },
    mousewheel: {
      enabled: true,
      releaseOnEdges: true,
    },
  }

  ngOnInit() {
    this.contactDetail = contactData[0]
    this.formData = this.formBuilder.group({
      messages: ['', [Validators.required]],
    })
  }

  messageSave() {
    const newMessage = {
      date: new Date().toDateString(),
      chat: [
        {
          user: {
            image: 'assets/img/avatar/29.jpg',
            name: '',
          },
          message: [this.message],
          time: new Date().toLocaleTimeString(),
          isSender: true,
        },
      ],
    }
    this.chatData.push(newMessage)

    // this.onListScroll();
    this.message = ''
  }

  emitOpenOffCanvas() {
    this.openOffCanvas.emit()
  }
}
