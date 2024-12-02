import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'

import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'product-video',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
