import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseComponent, FirebaseProvider, TawkComponent } from '@dedicated-ip/service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { environment } from '../environments/environment';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';
import { provideHttpClient } from '@angular/common/http';
import {CrispComponent} from "../../../../libs/services/src/lib/crisp/crisp.component";

@NgModule({
  declarations: [AppComponent],
  providers: [provideHttpClient(), provideTanStackQuery(new QueryClient(), withDevtools()), FirebaseProvider, MessageService, ToastModule],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
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
