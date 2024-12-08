import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseProvider } from '@dedicated-ip/service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,

    ],
    providers: [FirebaseProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
