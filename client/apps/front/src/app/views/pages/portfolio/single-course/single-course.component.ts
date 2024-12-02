import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { DescriptionComponent } from './component/description/description.component'
import { AuthorComponent } from './component/author/author.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { FaqComponent } from './component/faq/faq.component'
import { CoursesComponent } from './component/courses/courses.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-single-course',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    DescriptionComponent,
    AuthorComponent,
    TestimonialComponent,
    FaqComponent,
    CoursesComponent,
    Footer5Component,
  ],
  templateUrl: './single-course.component.html',
  styles: ``,
})
export class SingleCourseComponent {}
