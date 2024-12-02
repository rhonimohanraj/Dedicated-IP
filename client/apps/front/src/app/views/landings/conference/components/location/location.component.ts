import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
  selector: 'conference-location',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {}
