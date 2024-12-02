import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerificationRoutingModule } from './verification-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from '../../../../layout/config/app.config.module';
import { InputTextModule } from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
    imports: [
        CommonModule,
        VerificationRoutingModule,
        FormsModule,
        InputTextModule,
        KeyFilterModule,
        ButtonModule,
        RippleModule,
        AppConfigModule,
    ],
})
export class VerificationModule { }
