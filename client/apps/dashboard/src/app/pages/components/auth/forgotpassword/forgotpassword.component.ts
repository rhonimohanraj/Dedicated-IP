import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from '@dedicated-ip/service';
import { KeyValuePipe } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [
    RouterLink,
    ButtonModule,
    ChipsModule,
    ReactiveFormsModule,
    KeyValuePipe,
    PasswordModule,
    ToastModule,
  ],
  templateUrl: './forgotpassword.component.html',
})
export class ForgotPasswordComponent {
  public readonly layoutService = inject(LayoutService);
  private readonly messageService = inject(MessageService);
  private readonly FirebaseService = inject(FirebaseService);

  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  async onForgotPassword(): Promise<void> {
    if (this.formGroup.valid) {
      try {
        await this.FirebaseService.sendPasswordResetEmail(this.email!.value);
        this.messageService.add({
          severity: 'success',
          summary: 'Email sent',
          detail: 'Check your email for instructions',
        });
      } catch (error: any) {
        this.messageService.add({
          severity: 'error',
          summary: 'Email Sent failed',
          detail: error.toString(),
        });
      }
    }
  }
}
