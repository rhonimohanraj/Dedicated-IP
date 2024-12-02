import { Component, ViewEncapsulation } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'

import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'medical-video',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
