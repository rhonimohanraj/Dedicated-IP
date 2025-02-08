import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '@dedicated-ip/service';
import {NgClass} from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import {ToastService} from "../../../../services/toast/toast.service";
import {ToastsContainerComponent} from "../../../../services/toast/toast-container.componenet";

@Component({
  imports: [
    RouterLink,
    ButtonModule,
    ChipsModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
    NgClass,
    ToastsContainerComponent,
  ],
  templateUrl: './forgotpassword.component.html',
})
export class ForgotPasswordComponent {
  public readonly layoutService = inject(LayoutService);
  private readonly FirebaseService = inject(FirebaseService);
  private readonly toastService = inject(ToastService);

  formGroup!: FormGroup;
  submitted = false;
  error = '';
  year: number = new Date().getFullYear();

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get f() { return this.formGroup.controls; }

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  async onForgotPassword(): Promise<void> {
    this.submitted = true;
    if (this.formGroup.valid) {
      try {
        await this.FirebaseService.sendPasswordResetEmail(this.email!.value);
        this.toastService.show("Email sent, Check your email for instructions.", { classname: 'bg-success text-white', delay: 15000 });
      } catch (error: any) {
        this.toastService.show(error.toString(), { classname: 'bg-danger text-white', delay: 15000 });
      }
    }
  }
}
