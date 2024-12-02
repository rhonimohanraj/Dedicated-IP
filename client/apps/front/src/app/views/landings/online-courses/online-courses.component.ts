import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { CoursesComponent } from './component/courses/courses.component'
import { StepsComponent } from './component/steps/steps.component'
import { IconsComponent } from './component/icons/icons.component'
import { TesimonialsComponent } from './component/tesimonials/tesimonials.component'
import { BrandsComponent } from './component/brands/brands.component'
import { FaqComponent } from './component/faq/faq.component'
import { SignupComponent } from './component/signup/signup.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-online-courses',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    CoursesComponent,
    StepsComponent,
    IconsComponent,
    TesimonialsComponent,
    BrandsComponent,
    FaqComponent,
    SignupComponent,
    Footer5Component,
  ],
  templateUrl: './online-courses.component.html',
  styles: ``,
})
export class OnlineCoursesComponent {}
