import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessdeniedRoutingModule } from './accessdenied-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        AccessdeniedRoutingModule,
        ButtonModule
    ]
})
export class AccessdeniedModule {}
