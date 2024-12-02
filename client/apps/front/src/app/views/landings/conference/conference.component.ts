import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { VideoComponent } from './components/video/video.component'
import { SponsorsComponent } from './components/sponsors/sponsors.component'
import { SpeakersComponent } from './components/speakers/speakers.component'
import { TicketsComponent } from './components/tickets/tickets.component'
import { HighlightsComponent } from './components/highlights/highlights.component'
import { ScheduleComponent } from './components/schedule/schedule.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { LocationComponent } from './components/location/location.component'
import { CtaTicketComponent } from './components/cta-ticket/cta-ticket.component'
import { Footer10Component } from './components/footer10/footer10.component'

@Component({
  selector: 'app-conference',
  standalone: true,
  imports: [
    TopbarComponent,
    VideoComponent,
    SponsorsComponent,
    SpeakersComponent,
    TicketsComponent,
    HighlightsComponent,
    ScheduleComponent,
    TestimonialsComponent,
    LocationComponent,
    CtaTicketComponent,
    Footer10Component,
  ],
  templateUrl: './conference.component.html',
  styles: ``,
})
export class ConferenceComponent {}
