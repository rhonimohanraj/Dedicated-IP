import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { ContentComponent } from './component/content/content.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-contact-v3',
  standalone: true,
  imports: [TopbarComponent, ContentComponent, Footer9Component],
  templateUrl: './contact-v3.component.html',
  styles: ``,
})
export class ContactV3Component {}
