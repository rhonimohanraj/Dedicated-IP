import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'conference-highlights',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
})
export class HighlightsComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  }
}
