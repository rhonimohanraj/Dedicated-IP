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

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [SkeletonModule, FileUploadModule, TableModule, SliderModule, DropdownModule, MultiSelectModule, ChipsModule, DatePipe, RouterLink, InplaceModule, ToastModule, IpComponent],
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
}
