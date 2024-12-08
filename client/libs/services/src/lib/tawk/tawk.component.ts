import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import TawkMessengerAngular from '@tawk/tawk-messenger-angular';

@Component({
  selector: 'firebase-component',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class FirebaseComponent implements OnInit {
  constructor(public TawkMessengerAngular: TawkMessengerAngular) {}

  ngOnInit(): void {
    this.TawkMessengerAngular.init({
      propertyId: '675602222480f5b4f5aa828f',
      widgetId: '1iejvgm6q',
    });
  }
}
