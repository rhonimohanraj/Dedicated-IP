import {Component, computed, ElementRef, inject, ViewChild} from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import {DatePipe, JsonPipe} from '@angular/common';
import {FirestoreService, FunctionService} from '@dedicated-ip/service';
import {SkeletonModule} from "primeng/skeleton";
import {FileUploadModule} from "primeng/fileupload";
import {Table, TableModule} from "primeng/table";
import {SliderModule} from "primeng/slider";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {ChipsModule} from "primeng/chips";
import {Router, RouterLink} from "@angular/router";
import {InplaceModule} from "primeng/inplace";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [JsonPipe, SkeletonModule, FileUploadModule, TableModule, SliderModule, DropdownModule, MultiSelectModule, ChipsModule, DatePipe, RouterLink, InplaceModule],
})
export class ServersComponent {
  private readonly firestore = inject(FirestoreService);
  private readonly functionService = inject(FunctionService);
  public readonly servers = injectQuery(() => this.firestore.GetServerQuery());
  private readonly router = inject(Router);

  @ViewChild('filter') filter!: ElementRef;

  constructor() {
    computed(async () => {
      if(this.servers.isSuccess() && this.servers.data()?.length <= 0) {
        await this.router.navigate(['/d/pricing']);
      }
    });
  }

  async onBillingPortal(): Promise<void> {
    const result = await this.functionService.createBillingPortal();
    window.open(result.data, '_blank');
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
}
