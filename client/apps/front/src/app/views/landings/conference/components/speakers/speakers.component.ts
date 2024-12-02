import { Component } from '@angular/core'
import { speakerData } from '../../data'

@Component({
  selector: 'conference-speakers',
  standalone: true,
  imports: [],
  templateUrl: './speakers.component.html',
  styles: ``,
})
export class SpeakersComponent {
  speakerList = speakerData
}
