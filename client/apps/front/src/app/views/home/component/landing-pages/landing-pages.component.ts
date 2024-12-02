import { Component } from '@angular/core'
import { demoLandingPagesData } from '@views/home/data'

@Component({
  selector: 'app-landing-pages',
  standalone: true,
  imports: [],
  templateUrl: './landing-pages.component.html',
  styles: ``,
})
export class LandingPagesComponent {
  landingPagesData = demoLandingPagesData
}
