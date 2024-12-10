import { importProvidersFrom, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseComponent, FirebaseProvider, TawkComponent } from '@dedicated-ip/service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [AppComponent],
  providers: [FirebaseProvider, importProvidersFrom(MessageService), importProvidersFrom(ToastModule)],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    FirebaseComponent,
    TawkComponent,
    MessagesModule,
    MessageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
