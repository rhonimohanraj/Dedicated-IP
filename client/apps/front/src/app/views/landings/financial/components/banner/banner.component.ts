import { Component } from '@angular/core'
import { basePath } from '@states/constants'
import { LottieComponent, type AnimationOptions } from 'ngx-lottie'

@Component({
  selector: 'financial-banner',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './banner.component.html',
  styles: ``,
})
export class BannerComponent {
  options: AnimationOptions = {
    path: `${basePath}/assets/json/animation-financial-landing.json`,
  }

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '416px',
    margin: '0 auto',
  }
}
