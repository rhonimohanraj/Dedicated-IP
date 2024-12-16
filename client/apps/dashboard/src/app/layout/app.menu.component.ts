import {computed, inject, OnInit} from '@angular/core';
import { Component } from '@angular/core';
import {injectQuery, injectQueryClient, QueryObserver} from "@tanstack/angular-query-experimental";
import {FirestoreService} from "@dedicated-ip/service";
import {Server} from "../../../../../libs/services/src/lib/firebase/firestore.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: false
})
export class AppMenuComponent {
  private readonly firestore = inject(FirestoreService);
  private readonly queryClient = injectQueryClient();

    rawModel: any[] = [
      {
        label: 'Dashboards',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }
        ]
      },
      {
        label: 'Apps',
        icon: 'pi pi-th-large',
        items: [
          {
            label: 'Create Server',
            icon: 'pi pi-fw pi-sliders-v',
            routerLink: ['/d/pricing']
          },
          {
            label: 'Pricing',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/d/pricing']
          },
        ]
      },

    ];

    model: any[] = this.rawModel;

    constructor() {
      const unsubscribe = new QueryObserver(this.queryClient, this.firestore.GetServerQuery()).subscribe(result => {
        if(result.isSuccess) {
          this.model = this.rawModel;
          this.model.push
          ({
            label: 'Servers',
            icon: 'pi pi-server',
            items: result.data.map((server: Server) => {
              return {
                label: server.name,
                icon: 'pi pi-fw pi-server',
                items: [
                  {
                    label: 'Panel',
                    icon: 'pi pi-fw pi-cog',
                    url: server.domain,
                    target: '_blank'
                  }
                ]
              }
            }),
          });
          unsubscribe();
        }
      })
  }
}
