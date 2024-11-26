import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    templateUrl: './accessdenied.component.html',
    standalone: false
})
export class AccessdeniedComponent { 
    constructor(public layoutService: LayoutService){

    }
}