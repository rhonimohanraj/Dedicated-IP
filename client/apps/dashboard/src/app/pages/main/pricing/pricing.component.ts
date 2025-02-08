import {Component, computed, ElementRef, inject, ViewChild, viewChild} from '@angular/core';
import {FunctionService, RemoteConfigService} from "@dedicated-ip/service";
import {UpperCasePipe} from "@angular/common";
import {CdkStep, CdkStepLabel, CdkStepperNext, CdkStepperPrevious} from "@angular/cdk/stepper";
import {NgStepperModule} from "angular-ng-stepper";
import {NgOptionComponent, NgSelectComponent} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-pricing',
  imports: [
    UpperCasePipe,
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
  public readonly locations = computed(()=>{
    const locationSet = new Set<{ country: string, countryCode: string, city: string, datacenter: string }>();
    this.products().forEach(product => {
      locationSet.add(product.location);
    });
    return Array.from(locationSet);
  });

  serverName = '';
  error = '';

  async createPaymentLink(priceId: string): Promise<void> {
    const paymentLink = await this.functionService.createPaymentLink(priceId);
    if (paymentLink.data) {
      window.open(paymentLink.data, '_self');
    }
  }

  async validateServerName(): Promise<void> {
    const valid = await this.validateDomain(this.serverName);
    console.log(valid);
    if (valid) {
      this.error = 'This name is already taken, please try another name, If you continue we will add a random number to the end of the name.';
    }else{
      this.error = '';
    }
  }

  private async validateDomain(domain: string) {
    domain = domain.trim()
    const response = await fetch(`https://dns.google/resolve?name=${domain}.dedicated-ip.cloud&type=A`);
    const data = await response.json();
    return (data.Answer?.length ?? 0) > 0;
  }
}
