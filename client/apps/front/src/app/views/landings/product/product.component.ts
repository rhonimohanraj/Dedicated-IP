import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { VideoComponent } from './components/video/video.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { SpecsComponent } from './components/specs/specs.component'
import { ColorsComponent } from './components/colors/colors.component'
import { CtaComponent } from './components/cta/cta.component'
import { Footer4Component } from './components/footer4/footer4.component'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    VideoComponent,
    BenefitsComponent,
    GalleryComponent,
    SpecsComponent,
    ColorsComponent,
    CtaComponent,
    Footer4Component,
  ],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {}
