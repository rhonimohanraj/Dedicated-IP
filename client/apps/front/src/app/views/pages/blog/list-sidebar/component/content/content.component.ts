import { Component } from '@angular/core'
import { blogData } from '../../data'
import { RouterModule } from '@angular/router'
import { LightgalleryModule } from 'lightgallery/angular'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { currentYear } from '@states/constants'
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, LightgalleryModule, NgbTooltipModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  blogList = blogData
  currentYear = currentYear
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
