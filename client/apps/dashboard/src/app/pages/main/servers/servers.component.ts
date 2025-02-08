import {Component, computed, effect, ElementRef, inject, OnInit, signal, ViewChild} from '@angular/core';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {DatePipe} from '@angular/common';
import {FirestoreService, FunctionService} from '@dedicated-ip/service';
import {SkeletonModule} from "primeng/skeleton";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {ChipsModule} from "primeng/chips";
import {ActivatedRoute, Router} from "@angular/router";
import {InplaceModule} from "primeng/inplace";
import {asyncScheduler, tap} from "rxjs";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from "../../../components/map.component";
import {StatComponent} from "../../../components/stat.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [SkeletonModule, FileUploadModule, SliderModule, DropdownModule, MultiSelectModule, ChipsModule, DatePipe, InplaceModule, ToastModule, LeafletModule, StatComponent, MapComponent, SlickCarouselModule, NgbPagination, FormsModule],
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
    effect(async () => {
      if (this.servers.isSuccess()) {
        if (this.servers.data()?.length <= 0) {
          await this.router.navigate(['/d/pricing']);
        } else {
          this.cities.set(this.servers.data().map(x => x.location));
          this.statData.update((data) => {
            data[0].value = this.servers.data()?.length ?? 0;
            data[1].value = this.servers.data()?.filter(x=>x.status === 'active')?.length ?? 0;
            data[2].value = this.servers.data()?.filter(x=>x.status !== 'active' && x.status !== 'deleted')?.length ?? 0;
            data[3].value = this.servers.data()?.filter(x=>x.status === 'deleted')?.length ?? 0;
            return data;
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      tap(params => {
          if (params['payment'] === 'success') {
            asyncScheduler.schedule(() => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Payment was successful, The server will be provisioned shortly.'
              });
            }, 2000);
          }
          if (params['payment'] === 'cancel') {
            asyncScheduler.schedule(() => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Payment was cancelled, Please try again.'
              });
            }, 2000);
          }
        }
      )).subscribe();
  }

  async resetPassword(domainName: string, password: string): Promise<void> {
    this.messageService.add({severity: 'info', summary: 'Reset password', detail: 'Please wait...'});
    const serverId = domainName.replace('https://', '').split('.')[0];
    try {
      await this.functionService.reverseProxy(serverId, 'update-password', {
        username: 'admin',
        password: password,
      });
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Password reset successfully.'});
    } catch (e: any) {
      this.messageService.add({severity: 'error', summary: 'Please try again', detail: e.message});
    }

  }

  statData = signal<Array<{
    title: string,
    value: number,
    icon: string,
    bg_color: string
  }>>(
    [{
      title: 'TOTAL SERVERS',
      value: 0,
      icon: 'bx-customize',
      bg_color: 'bg-primary',
    }, {
      title: 'ACTIVE SERVERS',
      value: 0,
      icon: 'bx-server',
      bg_color: 'bg-secondary',
    }, {
      title: 'PENDING SERVERS',
      value: 0,
      icon: 'bx-bolt-circle',
      bg_color: 'bg-success',
    }, {
      title: 'DELETED',
      value: 0,
      icon: 'bx-folder-minus',
      bg_color: 'bg-danger'
    }
    ]);

  config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  cities = signal<Array<string>>([]);

  page = 1;
  pageSize = 10;
  term = signal('');
  filteredServer = computed(() => {
    return this.servers.data()?.filter(x => x.domain.includes(this.term()) || x.location.includes(this.term()) || x.status.includes(this.term()) || x.name.includes(this.term())) ?? [];
  });
}
