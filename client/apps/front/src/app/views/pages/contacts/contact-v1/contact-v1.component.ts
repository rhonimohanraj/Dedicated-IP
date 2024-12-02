import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { EmailComponent } from './component/email/email.component'
import { FaqComponent } from './component/faq/faq.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-contact-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    EmailComponent,
    FaqComponent,
    Footer5Component,
  ],
  templateUrl: './contact-v1.component.html',
  styles: ``,
})
export class ContactV1Component {}
