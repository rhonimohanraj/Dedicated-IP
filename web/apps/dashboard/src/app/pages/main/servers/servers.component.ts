import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { DatePipe } from '@angular/common';
import {
  FirestoreService,
  FunctionService,
  IpComponent,
} from '@dedicated-ip/service';
import { asyncScheduler, tap } from 'rxjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from '../../../components/map.component';
import { StatComponent } from '../../../components/stat.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../services/toast/toast.service';
import { AgentService } from '../../../services/agent.service';

@Component({
  selector: 'app-servers',
  standalone: true, // Marked as standalone as per modern practices
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [
    DatePipe,
    LeafletModule,
    StatComponent,
    MapComponent,
    SlickCarouselModule,
    NgbPagination,
    FormsModule,
    IpComponent,
  ],
})
export class ServersComponent implements OnInit {
  private readonly firestore = inject(FirestoreService);
  public readonly agentService = inject(AgentService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly toastService = inject(ToastService);

  public readonly servers = injectQuery(() => this.firestore.GetServerQuery());

  // Signals for component state
  cities = signal<string[]>([]);
  term = signal('');
  page = signal(1);
  pageSize = 10;

  // Pagination and filtering logic
  filteredServers = computed(() => {
    const term = this.term().toLowerCase();
    const serverData = this.servers.data() ?? [];

    const filtered = term
      ? serverData.filter(
          (s) =>
            s.domain.toLowerCase().includes(term) ||
            s.location.toLowerCase().includes(term) ||
            s.status.toLowerCase().includes(term) ||
            s.name.toLowerCase().includes(term),
        )
      : serverData;

    // Correct, stable sort: newest first
    return filtered.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  });

  paginatedServers = computed(() => {
    const p = this.page();
    const ps = this.pageSize;
    return this.filteredServers().slice((p - 1) * ps, p * ps);
  });

  config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };

  statData = signal([
    {
      title: 'TOTAL SERVERS',
      value: 0,
      icon: 'bx-customize',
      bg_color: 'bg-primary',
    },
    {
      title: 'ACTIVE SERVERS',
      value: 0,
      icon: 'bx-server',
      bg_color: 'bg-secondary',
    },
    {
      title: 'PENDING SERVERS',
      value: 0,
      icon: 'bx-bolt-circle',
      bg_color: 'bg-success',
    },
    {
      title: 'DELETED',
      value: 0,
      icon: 'bx-folder-minus',
      bg_color: 'bg-danger',
    },
  ]);

  // Slick Carousel configuration
  slickConfig = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  constructor() {
    // Effect to react to server data changes
    effect(() => {
      if (this.servers.isSuccess()) {
        const serverList = this.servers.data() ?? [];
        if (serverList.length <= 0) {
          this.router.navigate(['/d/pricing']);
        } else {
          this.cities.set(serverList.map((s) => s.location));
          this.statData.update((stats) => [
            { ...stats[0], value: serverList.length },
            {
              ...stats[1],
              value: serverList.filter((s) => s.status === 'active').length,
            },
            {
              ...stats[2],
              value: serverList.filter(
                (s) => s.status !== 'active' && s.status !== 'deleted',
              ).length,
            },
            {
              ...stats[3],
              value: serverList.filter((s) => s.status === 'deleted').length,
            },
          ]);
        }
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        tap((params) => {
          if (params['payment'] === 'success') {
            asyncScheduler.schedule(() => {
              this.toastService.show(
                'Payment was successful. The server will be provisioned shortly.',
                {
                  classname: 'bg-success text-white',
                  delay: 15000,
                },
              );
            }, 2000);
          }
          if (params['payment'] === 'cancel') {
            asyncScheduler.schedule(() => {
              this.toastService.show(
                'Payment was cancelled. Please try again.',
                {
                  classname: 'bg-danger text-white',
                  delay: 15000,
                },
              );
            }, 2000);
          }
        }),
      )
      .subscribe();
  }

  onPageChange(page: number): void {
    this.page.set(page);
  }
}
