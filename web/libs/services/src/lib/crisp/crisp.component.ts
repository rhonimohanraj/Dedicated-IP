import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Crisp} from "crisp-sdk-web";

@Component({
  selector: 'crisp-component',
  standalone: true,
  imports: [CommonModule],
  template:
    '<!--Start of Crisp Script--> <!--End of Crisp Script-->',
})
export class CrispComponent implements OnInit {
  ngOnInit(): void {
    Crisp.configure('b387a1f5-276c-4116-a241-40d5b7050a20');
  }
}
