import { Component } from '@angular/core'
import { TopbarComponent } from 'src/app/components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { AboutComponent } from './component/about/about.component'
import { AppFeatureComponent } from './component/app-feature/app-feature.component'
import { IndustriesComponent } from './component/industries/industries.component'
import { IntegrationComponent } from './component/integration/integration.component'
import { BlogComponent } from './component/blog/blog.component'
import { PriceComponent } from './component/price/price.component'
import { Footer8Component } from './component/footer8/footer8.component'

@Component({
  selector: 'app-saas-v4',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    AppFeatureComponent,
    IndustriesComponent,
    IntegrationComponent,
    BlogComponent,
    PriceComponent,
    Footer8Component,
  ],
  templateUrl: './saas-v4.component.html',
  styles: ``,
})
export class SaasV4Component {}
