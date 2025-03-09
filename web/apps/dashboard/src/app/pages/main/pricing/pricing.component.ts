import {Component, computed, inject, signal} from '@angular/core';
import {DomainHasARecord, FunctionService, RemoteConfigService} from "@dedicated-ip/service";
import {CdkStep, CdkStepLabel, CdkStepperNext, CdkStepperPrevious} from "@angular/cdk/stepper";
import {NgStepperModule} from "angular-ng-stepper";
import {NgOptionComponent, NgSelectComponent} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pricing',
  imports: [
    CdkStep,
    NgStepperModule,
    CdkStepLabel,
    NgSelectComponent,
    NgOptionComponent,
    CdkStepperNext,
    CdkStepperPrevious,
    FormsModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  private readonly remoteConfigService = inject(RemoteConfigService);
  private readonly functionService = inject(FunctionService);
  public readonly products = this.remoteConfigService.getProducts();
  public readonly filteredProducts = computed(() => {
    if (!this.server()) {
      return this.products();
    }
    return this.products().filter(product => {
      return this.server()?.city === product.location.city;
    });
  });
  public readonly locations = computed(()=>{
    const locations = new Array<{ country: string, countryCode: string, city: string, datacenter: string }>();
    this.products().forEach(product => {
      if (locations.filter(location => location.city === product.location.city).length === 0) {
        locations.push(product.location);
      }
    });
    return locations;
  });

  serverName = '';
  server = signal<{ country: string, countryCode: string, city: string, datacenter: string } | null>(null);
  error = '';

  async createPaymentLink(productId: string): Promise<void> {
    const paymentLink = await this.functionService.createPaymentLink(productId, this.serverName);
    if (paymentLink.data) {
      window.open(paymentLink.data.url, '_self');
    }
  }

  async validateServerName(): Promise<void> {
    if(!this.isValidServerName(this.serverName)) {
      this.error = 'Please enter valid name.';
      return;
    }
    const valid = await DomainHasARecord(this.serverName);
    if (valid) {
      this.error = 'This name is already taken, please try another name, If you continue we will add a random number to the end of the name.';
    }else{
      this.error = '';
    }
  }

  isValidServerName(serverName: string) : boolean {
    const normalized = serverName
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return serverName === normalized && normalized.length > 0;
  }

  protected readonly console = console;
}
