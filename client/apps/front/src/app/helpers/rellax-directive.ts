import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core'
import Rellax, { RellaxInstance, RellaxOptions } from 'rellax'

@Directive({
  standalone: true,
  selector: '[appRellax]',
})
export class RellaxDirective implements OnInit, OnDestroy {
  private rellax: RellaxInstance | null = null
  @Input('rellaxOptions') options: RellaxOptions = {}
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initializeRellax()
  }

  ngOnDestroy(): void {
    this.destroyRellax()
  }

  private initializeRellax(): void {
    setTimeout(() => {
      this.rellax = new Rellax(this.elementRef.nativeElement, this.options)
    })
  }

  private destroyRellax(): void {
    if (this.rellax) {
      this.rellax.destroy()
      this.rellax = null
    }
  }
}
