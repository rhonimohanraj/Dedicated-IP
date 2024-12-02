import { Component, ViewEncapsulation } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'

@Component({
  selector: 'about-v1-video-reel',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './video-reel.component.html',
  styleUrl: './video-reel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class VideoReelComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
