import { Component } from '@angular/core'
import { testimonialData } from '../../data'
import { NgxMasonryModule } from 'ngx-masonry'

@Component({
  selector: 'sass5-testimonials',
  standalone: true,
  imports: [NgxMasonryModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  testimonialData = testimonialData
}
