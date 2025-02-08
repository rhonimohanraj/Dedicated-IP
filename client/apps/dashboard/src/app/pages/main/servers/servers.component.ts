import {Component, computed, effect, ElementRef, inject, OnInit, signal, ViewChild} from '@angular/core';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {DatePipe} from '@angular/common';
import {FirestoreService, FunctionService, IpComponent} from '@dedicated-ip/service';
import {asyncScheduler, tap} from "rxjs";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from "../../../components/map.component";
import {StatComponent} from "../../../components/stat.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../../services/toast/toast.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [DatePipe, LeafletModule, StatComponent, MapComponent, SlickCarouselModule, NgbPagination, FormsModule, IpComponent],
})
export class ServersComponent implements OnInit {
  private readonly firestore = inject(FirestoreService);
  private readonly functionService = inject(FunctionService);
  public readonly servers = injectQuery(() => this.firestore.GetServerQuery());
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly toastService = inject(ToastService);

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
              this.toastService.show("Payment was successful, The server will be provisioned shortly.", { classname: 'bg-success text-white', delay: 15000 });
            }, 2000);
          }
          if (params['payment'] === 'cancel') {
            asyncScheduler.schedule(() => {
              this.toastService.show("Payment was cancelled, Please try again.", { classname: 'bg-danger text-white', delay: 15000 });
            }, 2000);
          }
        }
      )).subscribe();
  }

  openControlPanel(domain: string, username: string, password: string): void {
    // create hidden form and submit then delete it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = domain + '/login';
    form.target = '_blank';
    const usernameField = document.createElement('input');
    usernameField.type = 'text';
    usernameField.name = 'username';
    usernameField.value = username;
    form.appendChild(usernameField);
    const passwordField = document.createElement('input');
    passwordField.type = 'password';
    passwordField.name = 'password';
    passwordField.value = password;
    form.appendChild(passwordField);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
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
