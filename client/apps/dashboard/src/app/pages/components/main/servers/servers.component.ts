import { Component, inject, OnInit } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { JsonPipe } from '@angular/common';
import { FirestoreService, FunctionService } from '@dedicated-ip/service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [JsonPipe],
})
export class ServersComponent implements OnInit {
  private readonly firestore = inject(FirestoreService);
  public readonly user = injectQuery(() => this.firestore.GetUserQuery());
  private readonly functionService = inject(FunctionService);

  async ngOnInit(): Promise<void> {
    console.log(await this.functionService.createPaymentLink('price_1QPwuzJiFl8kjHM0ahOtCP3S'));
  }
}
