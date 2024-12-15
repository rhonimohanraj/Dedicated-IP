import { Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { JsonPipe } from '@angular/common';
import { FirestoreService } from '@dedicated-ip/service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  imports: [JsonPipe],
})
export class ServersComponent {
  private readonly firestore = inject(FirestoreService);
  public readonly user = injectQuery(()=> this.firestore.GetUserQuery());
}
