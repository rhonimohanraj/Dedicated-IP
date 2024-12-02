import { Component } from '@angular/core'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { HeroComponent } from './component/hero/hero.component'
import { DentalServiceComponent } from './component/dental-service/dental-service.component'
import { TeamComponent } from './component/team/team.component'
import { PricesComponent } from './component/prices/prices.component'
import { LatestNewsComponent } from './component/latest-news/latest-news.component'
import { ContactsComponent } from './component/contacts/contacts.component'
import { Footer5Component } from './component/footer5/footer5.component'

@Component({
  selector: 'app-service-detail-v2',
  standalone: true,
  imports: [
    TopbarComponent,
    HeroComponent,
    DentalServiceComponent,
    TeamComponent,
    PricesComponent,
    LatestNewsComponent,
    ContactsComponent,
    Footer5Component,
  ],
  templateUrl: './service-detail-v2.component.html',
  styles: ``,
})
export class ServiceDetailV2Component {}
