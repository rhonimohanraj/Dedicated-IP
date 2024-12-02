import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { ServiceComponent } from './components/service/service.component'
import { BannerComponent } from './components/banner/banner.component'
import { FeaturesComponent } from './components/features/features.component'
import { IndustriesComponent } from './components/industries/industries.component'
import { BrandsComponent } from './components/brands/brands.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { NewsComponent } from './components/news/news.component'
import { ContactComponent } from './components/contact/contact.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { Footer9Component } from './components/footer9/footer9.component'

@Component({
  selector: 'app-financial',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    ServiceComponent,
    BannerComponent,
    FeaturesComponent,
    IndustriesComponent,
    BrandsComponent,
    TestimonialsComponent,
    NewsComponent,
    ContactComponent,
    Footer9Component,
  ],
  templateUrl: './financial.component.html',
  styles: ``,
})
export class FinancialComponent {}
