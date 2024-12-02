import { Route } from '@angular/router'
import { GridViewComponent } from './grid-view/grid-view.component'
import { ListViewComponent } from './list-view/list-view.component'
import { SingleCourseComponent } from './single-course/single-course.component'
import { SingleProjectComponent } from './single-project/single-project.component'
import { SliderViewComponent } from './slider-view/slider-view.component'
import { CoursesComponent } from './courses/courses.component'

export const PORTFOLIO_ROUTES: Route[] = [
  {
    path: 'grid',
    component: GridViewComponent,
    data: { title: 'Portfolio Grid View' },
  },
  {
    path: 'list',
    component: ListViewComponent,
    data: { title: 'Portfolio List View' },
  },
  {
    path: 'slider',
    component: SliderViewComponent,
    data: { title: 'Portfolio Slider View' },
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: { title: 'Courses' },
  },
  {
    path: 'single-project',
    component: SingleProjectComponent,
    data: { title: 'Portfolio Single Project' },
  },
  {
    path: 'single-course',
    component: SingleCourseComponent,
    data: { title: 'Portfolio Single Course' },
  },
]
