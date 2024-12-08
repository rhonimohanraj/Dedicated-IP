import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Analytics, isSupported } from '@angular/fire/analytics';
import { AppCheck } from '@angular/fire/app-check';
import { Firestore } from '@angular/fire/firestore';
import { RemoteConfig } from '@angular/fire/remote-config';
import { Performance } from '@angular/fire/performance';

@Component({
  selector: 'firebase-component',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class FirebaseComponent implements OnInit {
  constructor(private injector: Injector) {}

  async ngOnInit(): Promise<void> {
    if(await isSupported()) {
      this.injector.get(Analytics);
      this.injector.get(AppCheck);
      this.injector.get(Firestore);
      this.injector.get(RemoteConfig);
      this.injector.get(Performance);
    }
  }
}
