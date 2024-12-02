import { Component } from '@angular/core'
import { JarallaxDirective } from '@components/jarallax-directive/jarallax-directive.component'
import { LightgalleryModule } from 'lightgallery/angular'
import { LottieComponent, type AnimationOptions } from 'ngx-lottie'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { RouterModule } from '@angular/router'
import { basePath } from '@states/constants'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'digital-agency-hero',
  standalone: true,
  imports: [
    LottieComponent,
    JarallaxDirective,
    LightgalleryModule,
    RouterModule,
    ScrollToModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  providers: [ScrollToService],
})
export class HeroComponent {
  options: AnimationOptions = {
    path: `${basePath}/assets/json/animation-digital-agency.json`,
  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
