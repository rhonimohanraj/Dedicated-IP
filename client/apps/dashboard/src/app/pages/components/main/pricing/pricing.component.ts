import {Component, inject} from '@angular/core';
import {FunctionService, RemoteConfigService} from "@dedicated-ip/service";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-pricing',
  imports: [
    RippleModule,
    ButtonModule,
    ToastModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  private readonly remoteConfigService = inject(RemoteConfigService);
  private readonly functionService = inject(FunctionService);
  private readonly messageService = inject(MessageService);
  public readonly products = this.remoteConfigService.getProducts();

  async createPaymentLink(priceId: string): Promise<void> {
    const paymentLink = await this.functionService.createPaymentLink(priceId);
    if (paymentLink.data) {
      window.open(paymentLink.data, '_self');
    }
  }
}
