import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { AboutComponent } from './component/about/about.component'
import { StatsComponent } from './component/stats/stats.component'
import { GalleryComponent } from './component/gallery/gallery.component'
import { BrandSwiperComponent } from './component/brand-swiper/brand-swiper.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { LeadersComponent } from './component/leaders/leaders.component'
import { ContactComponent } from './component/contact/contact.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-about-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    GalleryComponent,
    BrandSwiperComponent,
    TestimonialComponent,
    LeadersComponent,
    ContactComponent,
    Footer9Component,
  ],
  templateUrl: './about-v2.component.html',
  styles: ``,
})
export class AboutV2Component {}
