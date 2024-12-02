import { Component, NgZone, TemplateRef, inject } from '@angular/core'
import { ChatComponent } from './component/chat/chat.component'
import { ContactListComponent } from './component/contact-list/contact-list.component'
import { ContactType } from './data'
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [ChatComponent, ContactListComponent],
  templateUrl: './messages.component.html',
  providers: [NgbActiveOffcanvas],
})
export class MessagesComponent {
  profileDetail!: ContactType
  private offcanvasService = inject(NgbOffcanvas)
  constructor(private zone: NgZone) {}

  receiveDataFromChild(data: ContactType) {
    this.profileDetail = data
  }

  toggleOffCanvas() {
    this.offcanvasService.open(ContactListComponent, {
      position: 'start',
      panelClass:
        'offcanvas-lg offcanvas-start position-lg-relative h-100 bg-secondary shadow-none border-end',
    })
  }
}
