import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), title: 'Login - Dedicated-IP Dashboard'},
        { path: 'forgotpassword', loadChildren: () => import('./forgotpassword/forgotpassword.module').then(m => m.ForgotPasswordModule), title: 'Forgot Password - Dedicated-IP Dashboard'},
        { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule), title: 'Register- Dedicated-IP Dashboard'},
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
