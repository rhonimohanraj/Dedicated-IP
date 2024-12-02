import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { ServicesComponent } from './component/services/services.component'
import { AwardsComponent } from './component/awards/awards.component'
import { StudiesComponent } from './component/studies/studies.component'
import { AboutComponent } from './component/about/about.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-software-dev-agency-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    ServicesComponent,
    AwardsComponent,
    StudiesComponent,
    AboutComponent,
    CtaComponent,
    Footer5Component,
  ],
  templateUrl: './software-dev-agency-v2.component.html',
  styles: ``,
})
export class SoftwareDevAgencyV2Component {}
