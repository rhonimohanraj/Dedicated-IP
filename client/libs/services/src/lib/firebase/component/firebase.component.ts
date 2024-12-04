import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Analytics, isSupported } from '@angular/fire/analytics';

@Component({
  selector: 'firebase-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firebase.component.html',
})
export class FirebaseComponent implements OnInit {
  constructor(private injector: Injector) {}

  async ngOnInit(): Promise<void> {
    if(await isSupported()) {
      this.injector.get(Analytics)
    }
  }
}
