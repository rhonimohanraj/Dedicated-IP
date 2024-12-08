import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseModule } from '@dedicated-ip/service';

@NgModule({
    declarations: [
        AppComponent,
      FirebaseModule
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
