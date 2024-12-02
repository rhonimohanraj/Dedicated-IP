import { Component } from '@angular/core'
import { credits } from '@states/constants'

@Component({
  selector: 'app-footer1',
  standalone: true,
  imports: [],
  templateUrl: './footer1.component.html',
  styles: ``,
})
export class Footer1Component {
  creditsBy = credits
  isSending = false

  subscribe() {
    this.isSending = true
  }
}
