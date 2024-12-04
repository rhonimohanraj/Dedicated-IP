import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { FirebaseConfig } from './firebase-config';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(FirebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideRemoteConfig(() => getRemoteConfig()),
  ]
})
export class FirebaseModule { }
