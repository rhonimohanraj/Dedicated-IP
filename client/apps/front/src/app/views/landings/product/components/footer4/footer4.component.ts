import { Component } from '@angular/core'
import { SubscribeFormComponent } from '@components/subscribe-form/subscribe-form.component'
import { credits } from '@states/constants'

@Component({
  selector: 'app-footer4',
  standalone: true,
  imports: [SubscribeFormComponent],
  templateUrl: './footer4.component.html',
  styles: ``,
})
export class Footer4Component {
  creditsBy = credits
}
