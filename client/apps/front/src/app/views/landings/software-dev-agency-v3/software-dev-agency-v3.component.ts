import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { AboutComponent } from './component/about/about.component'
import { SolutionComponent } from './component/solution/solution.component'
import { IndustriesComponent } from './component/industries/industries.component'
import { TechnologyComponent } from './component/technology/technology.component'
import { ProjectsComponent } from './component/projects/projects.component'
import { BenefitsComponent } from './component/benefits/benefits.component'
import { BrandsComponent } from './component/brands/brands.component'
import { BlogComponent } from './component/blog/blog.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-software-dev-agency-v3',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    SolutionComponent,
    IndustriesComponent,
    TechnologyComponent,
    ProjectsComponent,
    BenefitsComponent,
    BrandsComponent,
    BlogComponent,
    Footer9Component,
  ],
  templateUrl: './software-dev-agency-v3.component.html',
  styles: ``,
})
export class SoftwareDevAgencyV3Component {}
