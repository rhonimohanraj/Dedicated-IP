import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { projectData } from '../../data'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { RouterModule } from '@angular/router'
import { Pagination } from 'swiper/modules'
register()

@Component({
  selector: 'single-project-project',
  standalone: true,
  imports: [SwiperDirective, RouterModule],
  templateUrl: './project.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectComponent {
  singleProjectData = projectData

  projectConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  }
}
