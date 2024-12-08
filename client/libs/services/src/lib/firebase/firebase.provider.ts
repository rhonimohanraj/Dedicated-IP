import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirebaseConfig } from './firebase-config';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const FirebaseProvider = [
  provideFirebaseApp(() => initializeApp(FirebaseConfig)),
  provideAnalytics(() => getAnalytics()),
  provideRemoteConfig(() => getRemoteConfig()),
];
