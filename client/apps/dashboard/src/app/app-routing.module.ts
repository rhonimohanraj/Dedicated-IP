import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import {LayoutComponent} from "./pages/layouts/layout.component";

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const redirectUnauthorizedToLanding = () =>
  redirectUnauthorizedTo(['auth', 'login']);

const routes: Routes = [
  {
    path: 'd',
    loadChildren: () =>
      import('./pages/components/main/main.module').then((m) => m.MainModule),
    component: LayoutComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLanding },
  },
  {
    path: 'auth',
    data: { breadcrumb: 'Auth' },
    loadChildren: () =>
      import('./pages/components/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/d' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
