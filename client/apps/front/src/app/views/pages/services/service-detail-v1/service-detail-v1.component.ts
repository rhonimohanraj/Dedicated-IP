import { Component } from '@angular/core'
import { Breadcrumb2Component } from '@components/breadcrumb2/breadcrumb2.component'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { PagetitleComponent } from './component/pagetitle/pagetitle.component'
import { OffersComponent } from './component/offers/offers.component'
import { StepsComponent } from './component/steps/steps.component'
import { BrandsComponent } from './component/brands/brands.component'
import { ImageTextComponent } from './component/image-text/image-text.component'
import { CtaComponent } from './component/cta/cta.component'
import { Footer9Component } from './component/footer9/footer9.component'

@Component({
  selector: 'app-service-detail-v1',
  standalone: true,
  imports: [
    TopbarComponent,
    Breadcrumb2Component,
    PagetitleComponent,
    OffersComponent,
    StepsComponent,
    BrandsComponent,
    ImageTextComponent,
    CtaComponent,
    Footer9Component,
  ],
  templateUrl: './service-detail-v1.component.html',
  styles: ``,
})
export class ServiceDetailV1Component {}
