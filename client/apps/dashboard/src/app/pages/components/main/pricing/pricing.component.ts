import {Component, inject} from '@angular/core';
import {RemoteConfigService} from "@dedicated-ip/service";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-pricing',
  imports: [
    RippleModule,
    ButtonModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  private readonly remoteConfigService = inject(RemoteConfigService);
  public readonly products = this.remoteConfigService.getProducts();

}
