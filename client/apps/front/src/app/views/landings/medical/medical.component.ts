import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { FeatureIconsComponent } from './components/feature-icons/feature-icons.component'
import { VideoComponent } from './components/video/video.component'
import { ServicesComponent } from './components/services/services.component'
import { CtaComponent } from './components/cta/cta.component'
import { TeamComponent } from './components/team/team.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { NewsComponent } from './components/news/news.component'
import { ContactsComponent } from './components/contacts/contacts.component'
import { Footer5Component } from './components/footer5/footer5.component'

@Component({
  selector: 'app-medical',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    FeatureIconsComponent,
    VideoComponent,
    ServicesComponent,
    CtaComponent,
    TeamComponent,
    TestimonialsComponent,
    NewsComponent,
    ContactsComponent,
    Footer5Component,
  ],
  templateUrl: './medical.component.html',
  styles: ``,
})
export class MedicalComponent {}
