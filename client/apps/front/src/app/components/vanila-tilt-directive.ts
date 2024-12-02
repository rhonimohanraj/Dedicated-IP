import { Directive, ElementRef, Input, OnInit } from '@angular/core'
import VanillaTilt from 'vanilla-tilt'

@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnInit {
  @Input() max = 12
  @Input() perspective = 1200
  @Input() fullPageListening = false

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    VanillaTilt.init(this.elementRef.nativeElement, {
      max: this.max,
      perspective: this.perspective,
    })
  }
}
