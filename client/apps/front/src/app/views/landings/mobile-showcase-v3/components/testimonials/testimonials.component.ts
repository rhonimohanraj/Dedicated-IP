import { Component } from '@angular/core'
import { testimonialData } from '../../data'
import { CommonModule } from '@angular/common'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'mobile-showcase-v3-testimonials',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './testimonials.component.html',
  styles: ``,
})
export class TestimonialsComponent {
  clientList = testimonialData
}
