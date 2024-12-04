import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { FirebaseModule } from '@dedicated-ip/service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        FirebaseModule
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/dashboard' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
