import { Component } from '@angular/core'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import { currentYear } from '@states/constants'

@Component({
  selector: 'conference-video',
  standalone: true,
  imports: [ScrollToModule],
  templateUrl: './video.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class VideoComponent {
  currentYear = currentYear
}
