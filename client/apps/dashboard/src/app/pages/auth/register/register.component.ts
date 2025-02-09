import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '@dedicated-ip/service';
import { asyncScheduler } from 'rxjs';
import {ToastService} from "../../../services/toast/toast.service";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent {
  private readonly router = inject(Router);
  private readonly FirebaseService = inject(FirebaseService);
  private readonly toastService = inject(ToastService);

  formGroup!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  year: number = new Date().getFullYear();

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

  async onRegisterWithEmailAndPassword(): Promise<void> {
    this.error = '';
    this.submitted = true;
    if (this.formGroup.valid) {
      try {
        const user = await this.FirebaseService.createUserWithEmailAndPassword(
          this.email!.value,
          this.password!.value,
        );
        if (user) {
          this.toastService.show("You have successfully Registered, Please verify your email address.", { classname: 'bg-success text-white', delay: 15000 });
          asyncScheduler.schedule(async () => {
            await this.router.navigate(['/']);
          }, 4000);
        }
      } catch (error: any) {
        this.error = error.toString();
        this.toastService.show("Register failed, please try again.", { classname: 'bg-danger text-white', delay: 15000 });
      }
    } else{
      this.toastService.show("Please fill in all the required fields.", { classname: 'bg-danger text-white', delay: 15000 });
    }
  }

  async onRegisterWithGoogle(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithGoogle();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
      this.toastService.show("Register Failed.", { classname: 'bg-danger text-white', delay: 15000 });
    }
  }

  async onRegisterWithFacebook(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithFacebook();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
      this.toastService.show("Register Failed.", { classname: 'bg-danger text-white', delay: 15000 });
    }
  }

  async onRegisterWithTwitter(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithTwitter();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
      this.toastService.show("Register Failed.", { classname: 'bg-danger text-white', delay: 15000 });
    }
  }

  async onRegisterWithGithub(): Promise<void> {
    this.error = '';
    try {
      const user = await this.FirebaseService.signInWithGithub();
      if (user) {
        await this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.error = error.toString();
      this.toastService.show("Register Failed.", { classname: 'bg-danger text-white', delay: 15000 });
    }
  }
}
