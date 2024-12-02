import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { FeaturesComponent } from './components/features/features.component'
import { HotspotsComponent } from './components/hotspots/hotspots.component'
import { StepsComponent } from './components/steps/steps.component'
import { CtaComponent } from './components/cta/cta.component'
import { WizardComponent } from './components/wizard/wizard.component'
import { BenefitsComponent } from './components/benefits/benefits.component'
import { Footer8Component } from './components/footer8/footer8.component'

@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    FeaturesComponent,
    HotspotsComponent,
    StepsComponent,
    CtaComponent,
    WizardComponent,
    BenefitsComponent,
    Footer8Component,
  ],
  templateUrl: './startup.component.html',
  styles: ``,
})
export class StartupComponent {}
