import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { FeatureComponent } from './component/feature/feature.component'
import { VideoReelComponent } from './component/video-reel/video-reel.component'
import { AwardsComponent } from './component/awards/awards.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { TeamComponent } from './component/team/team.component'
import { ContactComponent } from './component/contact/contact.component'
import { SocialNetworkComponent } from './component/social-network/social-network.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-about-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    FeatureComponent,
    VideoReelComponent,
    AwardsComponent,
    TestimonialComponent,
    TeamComponent,
    ContactComponent,
    SocialNetworkComponent,
    Footer9Component,
  ],
  templateUrl: './about-v1.component.html',
  styles: ``,
})
export class AboutV1Component {}
