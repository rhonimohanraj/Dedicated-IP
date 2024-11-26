import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './notfound.component.html',
    standalone: false
})
export class NotfoundComponent { 
	constructor(public layoutService: LayoutService){

    }
}