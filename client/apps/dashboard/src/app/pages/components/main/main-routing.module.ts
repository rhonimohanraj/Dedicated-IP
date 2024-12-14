import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'servers',
        loadComponent: () =>
          import('./servers/servers.component').then((m) => m.ServersComponent),
      },
      { path: '**', redirectTo: '/servers' },
    ]),
  ],
  exports: [RouterModule],
})
export class MainRoutingModule {}
