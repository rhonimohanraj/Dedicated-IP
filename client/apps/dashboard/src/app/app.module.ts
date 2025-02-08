import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrispComponent, FirebaseComponent, FirebaseProvider, TawkComponent} from '@dedicated-ip/service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {environment} from '../environments/environment';
import {provideTanStackQuery, QueryClient, withDevtools} from '@tanstack/angular-query-experimental';
import {provideHttpClient} from '@angular/common/http';
import * as Sentry from "@sentry/angular";
import {Router} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  providers: [provideHttpClient(), provideTanStackQuery(new QueryClient(), withDevtools()), FirebaseProvider, MessageService, ToastModule, {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler(),
  },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => undefined,
      deps: [Sentry.TraceService],
      multi: true,
    },],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseComponent,
    TawkComponent,
    MessagesModule,
    MessageModule,
    CrispComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    if (!environment.production) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (<unknown>window).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }
  }
}
