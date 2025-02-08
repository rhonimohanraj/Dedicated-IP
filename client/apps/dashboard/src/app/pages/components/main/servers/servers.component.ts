import {Component, computed, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import {DatePipe} from '@angular/common';
import {FirestoreService, FunctionService, IpComponent} from '@dedicated-ip/service';
import {SkeletonModule} from "primeng/skeleton";
import {FileUploadModule} from "primeng/fileupload";
import {Table, TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {ChipsModule} from "primeng/chips";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {InplaceModule} from "primeng/inplace";
import {asyncScheduler, tap} from "rxjs";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { circle, latLng, tileLayer } from 'leaflet';
import {StatComponent} from "../../../../components/stat.component";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [SkeletonModule, FileUploadModule, TableModule, SliderModule, DropdownModule, MultiSelectModule, ChipsModule, DatePipe, RouterLink, InplaceModule, ToastModule, IpComponent, LeafletModule, StatComponent],
  providers: [MessageService],
})
export class ServersComponent implements OnInit {
  private readonly firestore = inject(FirestoreService);
  private readonly functionService = inject(FunctionService);
  public readonly servers = injectQuery(() => this.firestore.GetServerQuery());
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly messageService = inject(MessageService);

  @ViewChild('filter') filter!: ElementRef;

  constructor() {
    computed(async () => {
      if(this.servers.isSuccess() && this.servers.data()?.length <= 0) {
        await this.router.navigate(['/d/pricing']);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      tap(params => {
        if(params['payment'] === 'success') {
          asyncScheduler.schedule(() => {
            this.messageService.add({severity:'success', summary:'Success', detail:'Payment was successful, The server will be provisioned shortly.'});
          }, 2000);
        }
        if (params['payment'] === 'cancel') {
          asyncScheduler.schedule(() => {
            this.messageService.add({severity:'error', summary:'Error', detail:'Payment was cancelled, Please try again.'});
          }, 2000);
        }
      }
    )).subscribe();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  async resetPassword(domainName: string, password: string): Promise<void> {
    this.messageService.add({severity: 'info', summary: 'Reset password', detail: 'Please wait...'});
    const serverId = domainName.replace('https://', '').split('.')[0];
    try{
      await this.functionService.reverseProxy(serverId, 'update-password', {
        username: 'admin',
        password: password,
      });
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Password reset successfully.'});
    } catch (e: any) {
      this.messageService.add({severity: 'error', summary: 'Please try again', detail: e.message});
    }

  }

  options = {
    layers: [
      tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVkaWNhdGVkLWlwIiwiYSI6ImNtNndieDd6dzBkeGgyaXF2bDJlcjFsOG4ifQ.QeUyNWXbnIRkAWstwc22FQ", {
        id: "mapbox/light-v9",
        tileSize: 512,
        zoomOffset: 0,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      })
    ],
    zoom: 0,
    center: latLng(0, 0)
  };
  layers = [
    circle([41.9, 12.45], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([12.05, -61.75], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
    circle([1.3, 103.8], { color: "#435fe3", opacity: 0.5, weight: 10, fillColor: "#435fe3", fillOpacity: 1, radius: 400000, }),
  ];

  statData = [{
    title: 'TOTAL EARNINGS',
    value: 559.25,
    icon: 'bx-dollar-circle',
    persantage: '16.24',
    profit: 'up',
    bg_color: 'bg-primary',
    link: 'View net earnings'
  }, {
    title: 'ORDERS',
    value: 36894,
    icon: 'bx-shopping-bag',
    persantage: '3.57',
    profit: 'down',
    bg_color: 'bg-secondary',
    link: 'View all orders'
  }, {
    title: 'CUSTOMERS',
    value: 183.35,
    icon: 'bx-user-circle',
    persantage: '29.08',
    profit: 'up',
    bg_color: 'bg-success',
    link: 'See details'
  }, {
    title: 'MY BALANCE',
    value: 165.89,
    icon: 'bx-wallet',
    persantage: '0.00',
    profit: 'equal',
    bg_color: 'bg-info',
    link: 'Withdraw money'
  }
  ];
}
