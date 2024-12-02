import { Component } from '@angular/core'
import { workFlowData } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'

import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { RellaxDirective } from '@helpers/rellax-directive'

@Component({
  selector: 'sass3-video-steps',
  standalone: true,
  imports: [LightgalleryModule, RellaxDirective],
  templateUrl: './video-steps.component.html',
  styleUrl: './video-steps.component.scss',
})
export class VideoStepsComponent {
  steps = workFlowData

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
