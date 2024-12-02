import { Component } from '@angular/core'
import { RellaxDirective } from '@helpers/rellax-directive'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'mobile-show-case-hero',
  standalone: true,
  imports: [ScrollToModule, RellaxDirective],
  templateUrl: './hero.component.html',
  styles: ``,
  providers: [ScrollToService],
})
export class HeroComponent {}
