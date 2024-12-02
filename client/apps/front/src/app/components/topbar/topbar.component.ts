import { CommonModule } from '@angular/common'
import {
  Component,
  HostListener,
  inject,
  Input,
  OnDestroy,
  ViewChild,
  type ElementRef,
  type TemplateRef,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'
import { LogoBoxComponent } from '../logo-box.component'
import { ThemeSwitcherComponent } from '../theme-switcher.component'
import { BuyNowButtonComponent } from '../buy-now-button.component'
import { AppMenuComponent } from '../app-menu/app-menu.component'

@Component({
  selector: 'component-topbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AppMenuComponent,
    LogoBoxComponent,
    ThemeSwitcherComponent,
    BuyNowButtonComponent,
  ],
  providers: [NgbActiveOffcanvas],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnDestroy {
  @Input() headerClassName: string = ''
  @Input() theme: string = 'light'

  @ViewChild('topbarHeader') topbarHeader!: ElementRef

  offcanvasService = inject(NgbOffcanvas)

  openMenu(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.topbarHeader.nativeElement) this.checkScroll()
  }

  ngOnDestroy(): void {
    const bodyTag = document.body
    if (bodyTag) {
      bodyTag.style.removeProperty('padding-top')
    }
  }

  checkScroll() {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    const navbarClassList = this.topbarHeader.nativeElement.classList
    const isAbsolute = navbarClassList.contains('position-absolute')
    const offsetHeight = this.topbarHeader.nativeElement.offsetHeight
    const bodyStyle = document.body.style
    if (scrollTop > 500) {
      if (!isAbsolute) bodyStyle.paddingTop = offsetHeight + 'px'
      this.topbarHeader.nativeElement?.classList.add('navbar-stuck')
    } else {
      if (!isAbsolute) bodyStyle.paddingTop = 'unset'
      this.topbarHeader.nativeElement?.classList.remove('navbar-stuck')
    }
  }
}
