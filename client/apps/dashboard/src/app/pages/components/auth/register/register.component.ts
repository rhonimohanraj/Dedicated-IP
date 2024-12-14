import { Component, inject, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '@dedicated-ip/service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class RegisterComponent {

  public confirmed = false;

  private readonly router = inject(Router);
  public readonly layoutService = inject(LayoutService);
  private readonly messageService = inject(MessageService);
  private readonly FirebaseService = inject(FirebaseService);

  formGroup!: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      confirmed: new FormControl('', Validators.requiredTrue),
    });
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  async onRegisterWithEmailAndPassword(): Promise<void> {
    if (this.formGroup.valid) {
      try {
        const user = await this.FirebaseService.createUserWithEmailAndPassword(
          this.email!.value,
          this.password!.value,
        );
        if (user) {
          this.messageService.add({
            severity: 'success',
            summary: 'Register successful',
            detail: 'You have successfully Registered, Please verify your email address',
          });
          await this.router.navigate(['/']);
        }
      } catch (error: any) {
        this.messageService.add({
          severity: 'error',
          summary: 'Register failed',
          detail: error.toString(),
        });
      }
    }
  }

  async onLoginWithGoogle(): Promise<void> {
    try {
      const user = await this.FirebaseService.signInWithGoogle();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed',
        detail: error.toString(),
      });
    }
  }

  async onLoginWithFacebook(): Promise<void> {
    try {
      const user = await this.FirebaseService.signInWithFacebook();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed',
        detail: error.toString(),
      });
    }
  }

  async onLoginWithTwitter(): Promise<void> {
    try {
      const user = await this.FirebaseService.signInWithTwitter();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed',
        detail: error.toString(),
      });
    }
  }

  async onLoginWithGithub(): Promise<void> {
    try {
      const user = await this.FirebaseService.signInWithGithub();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Login failed',
        detail: error.toString(),
      });
    }
  }

}
