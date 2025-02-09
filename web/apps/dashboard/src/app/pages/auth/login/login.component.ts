import {Component, inject, signal} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { NgClass } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FirebaseService } from '@dedicated-ip/service';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
  imports: [
    RouterLink,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputMaskModule,
    ToastModule,
    DividerModule,
    RippleModule,
    NgClass,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly FirebaseService = inject(FirebaseService);

  formGroup!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  year: number = new Date().getFullYear();
  loading = signal<boolean>(false);

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get f() { return this.formGroup.controls; }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  async onLoginWithEmailAndPassword(): Promise<void> {
    this.submitted = true;
    this.error = '';
    if (this.formGroup.valid) {
      try {
        this.loading.set(true);
        const user = await this.FirebaseService.signInWithEmailAndPassword(
          this.email!.value,
          this.password!.value,
        );
        if (user) {
          await this.router.navigate(['/']);
        }
        this.loading.set(false);
      } catch (error: any) {
        this.loading.set(false);
        this.error = error.toString();
      }
    }
  }

  async onLoginWithGoogle(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithGoogle();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
    }
  }

  async onLoginWithFacebook(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithFacebook();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
    }
  }

  async onLoginWithTwitter(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithTwitter();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
    }
  }

  async onLoginWithGithub(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithGithub();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
    }
  }
}
