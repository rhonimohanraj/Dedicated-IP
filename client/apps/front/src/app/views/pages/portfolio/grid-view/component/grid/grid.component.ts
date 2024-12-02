import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core'
import { gridData } from '../../data'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'grid-view-grid',
  standalone: true,
  imports: [NgbPaginationModule, RouterModule],
  templateUrl: './grid.component.html',
  styles: `
    [aria-label='Previous'] {
      color: blue;
      font-weight: bold;
    }
  `,
})
export class GridComponent implements AfterViewInit {
  gridViewData = gridData
  page = 1

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const previousButton = this.el.nativeElement.querySelector(
      '[aria-label="Previous"]'
    )
    this.renderer.setStyle(previousButton, 'display', 'none')
  }
}
