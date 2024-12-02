import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgxMasonryModule } from 'ngx-masonry'

@Component({
  selector: 'digital-agency-project-feature',
  standalone: true,
  imports: [NgxMasonryModule, RouterModule],
  templateUrl: './project-feature.component.html',
  styles: ``,
})
export class ProjectFeatureComponent {}
