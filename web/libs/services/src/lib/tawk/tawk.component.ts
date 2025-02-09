import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tawk-component',
  standalone: true,
  imports: [CommonModule],
  template:
    '<!--Start of Tawk.to Script--> <!--End of Tawk.to Script-->',
})
export class TawkComponent implements OnInit {
  ngOnInit(): void {
    const s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/675602222480f5b4f5aa828f/1iejvgm6q';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode?.insertBefore(s1,s0);
  }
}
