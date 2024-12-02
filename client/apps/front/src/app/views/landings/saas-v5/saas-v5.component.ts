import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { CategoriesComponent } from './components/categories/categories.component'
import { UsecasesComponent } from './components/usecases/usecases.component'
import { VideoComponent } from './components/video/video.component'
import { TestimonialsComponent } from './components/testimonials/testimonials.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { MapComponent } from './components/map/map.component'
import { Footer6Component } from './components/footer6/footer6.component'

@Component({
  selector: 'app-saas-v5',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    CategoriesComponent,
    UsecasesComponent,
    MapComponent,
    VideoComponent,
    TestimonialsComponent,
    PricingComponent,
    Footer6Component,
  ],
  templateUrl: './saas-v5.component.html',
  styles: ``,
})
export class SaasV5Component {}
