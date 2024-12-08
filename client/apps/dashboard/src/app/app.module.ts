import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseComponent, FirebaseProvider, TawkComponent } from '@dedicated-ip/service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    FirebaseComponent,
    TawkComponent,
  ],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
