import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
  selector: 'service-detail-v2-contacts',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {}
