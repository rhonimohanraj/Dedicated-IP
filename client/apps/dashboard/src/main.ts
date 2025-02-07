import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from "@sentry/angular";


import { AppModule } from './app/app.module';

Sentry.init({
  dsn: "https://241595989671a89daa3623a6a9eb03de@o4508776880209920.ingest.de.sentry.io/4508776882176080",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 0.1,
  tracePropagationTargets: ["localhost", /^https:\/\/d.dedicated-ip\.net/],
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 0.5,
});


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
