import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

const redirectUnauthorizedToLanding = () =>
  redirectUnauthorizedTo(['auth', 'login']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/components/main/main.module').then((m) => m.MainModule),
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLanding },
  },
  {
    path: 'auth',
    data: { breadcrumb: 'Auth' },
    loadChildren: () =>
      import('./pages/components/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
