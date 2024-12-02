import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'

@Component({
  selector: 'component-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
})
export class BackToTopComponent {
  @ViewChild('backToTopButton') backToTopButton!: ElementRef

  scrollOffset = 600

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.backToTopButton) return
    const target = window
    if (target && target.scrollY > this.scrollOffset) {
      this.backToTopButton.nativeElement.classList.add('show')
    } else {
      this.backToTopButton.nativeElement.classList.remove('show')
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
