import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'

import lgZoom from 'lightgallery/plugins/zoom'

@Component({
  selector: 'medical-contacts',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './contacts.component.html',
  styles: ``,
})
export class ContactsComponent {
  settings = {
    counter: false,
    plugins: [],
    selector: 'a',
  }
}
