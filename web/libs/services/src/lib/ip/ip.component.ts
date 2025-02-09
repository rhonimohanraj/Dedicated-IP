import {Component, computed, input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleDnsDto} from "../DTO/google-dns.dto";
import {rxResource} from "@angular/core/rxjs-interop";
import {of} from "rxjs";

@Component({
  selector: 'ip-component',
  standalone: true,
  imports: [CommonModule],
  template:
    '{{ ip() }}',
})
export class IpComponent {
  domain = input.required<string>();
  ip = signal('');

  r = rxResource({
    request: computed(()=>({domain: this.domain().replace('http://', '').replace('https://', '')})),
    loader: (data)=> of(this.loader(data.request.domain)),
  });

  constructor() {
    computed(async () => {
      const domain = this.domain();

    });
  }

  async loader(domain: string) {
    await fetch(`https://dns.google/resolve?name=${domain}&type=A`)
      .then(response => response.json())
      .then((data: GoogleDnsDto) => {
        this.ip.set(data.Answer[0].data);
      });
  }
}
