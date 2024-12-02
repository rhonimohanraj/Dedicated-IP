import { Component } from '@angular/core'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { SliderComponent } from './component/slider/slider.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-slider-view',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbComponent,
    SliderComponent,
    Footer9Component,
  ],
  templateUrl: './slider-view.component.html',
  styles: ``,
})
export class SliderViewComponent {}
