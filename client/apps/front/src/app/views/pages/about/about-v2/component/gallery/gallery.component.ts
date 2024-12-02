import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
@Component({
  selector: 'about-v2-gallery',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './gallery.component.html',
  styles: ``,
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail, lgVideo],
    selector: 'a',
  }
}
