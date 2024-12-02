import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { LottieComponent, type AnimationOptions } from 'ngx-lottie'
import { Footer12Component } from './component/footer12/footer12.component'
import { RouterModule } from '@angular/router'
import { basePath } from '@states/constants'

@Component({
  selector: 'app-error-v1',
  standalone: true,
  imports: [LottieComponent, TopbarComponent, Footer12Component, RouterModule],
  templateUrl: './error-v1.component.html',
  styles: ``,
})
export class ErrorV1Component {
  options: AnimationOptions = {
    path: `${basePath}assets/json/animation-404-v1.json`,
    loop: true,
  }
}
