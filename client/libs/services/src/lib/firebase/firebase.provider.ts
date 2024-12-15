import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FirebaseConfig } from './firebase-config';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeAppCheck, provideAppCheck, ReCaptchaEnterpriseProvider } from '@angular/fire/app-check';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const FirebaseProvider = [
  provideFirebaseApp(() => initializeApp(FirebaseConfig)),
  provideAnalytics(() => getAnalytics()),
  provideRemoteConfig(() => getRemoteConfig()),
  provideAppCheck(() =>
    initializeAppCheck(getApp(), {
      provider: new ReCaptchaEnterpriseProvider(
        FirebaseConfig.recaptchaSiteKey,
      ),
      isTokenAutoRefreshEnabled: true,
    }),
  ),
  provideFirestore(() => getFirestore()),
  providePerformance(() => getPerformance()),
  provideAuth(() => getAuth()),
  provideFunctions(() => getFunctions()),
];
