import { Component } from '@angular/core'
import { storyData } from '../../data'

@Component({
  selector: 'about-v3-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styles: ``,
})
export class StoryComponent {
  storyListData = storyData
}
