import { Component, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hotjar',
  standalone: true,
  template: '',
})
export class HotjarComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    if (this.document.querySelector('script[src*="hotjar.com"]')) return;

    const hjid = 5298018; // Replace with your Hotjar ID
    const hjsv = 6;       // Replace with your Hotjar version

    const script = this.document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}`;
    script.onload = () => console.log('Hotjar loaded');
    script.onerror = (error) => console.error('Hotjar load error:', error);

    this.document.head?.appendChild(script); // Use optional chaining
  }
}
