import { Component } from '@angular/core'
import { HeroComponent } from './component/hero/hero.component'
import { StoryComponent } from './component/story/story.component'
import { LocationComponent } from './component/location/location.component'
import { TeamComponent } from './component/team/team.component'
import { StatesComponent } from './component/states/states.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { CtaComponent } from './component/cta/cta.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { Footer11Component } from './component/footer11/footer11.component'

@Component({
  selector: 'app-about-v3',
  standalone: true,
  imports: [
    HeroComponent,
    StoryComponent,
    LocationComponent,
    TeamComponent,
    StatesComponent,
    TestimonialComponent,
    CtaComponent,
    TopbarComponent,
    Footer11Component,
  ],
  templateUrl: './about-v3.component.html',
  styles: ``,
})
export class AboutV3Component {}
