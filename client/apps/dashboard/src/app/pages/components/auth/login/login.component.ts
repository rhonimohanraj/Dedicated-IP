import { Component, inject, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyValuePipe } from '@angular/common';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  imports: [
    RouterLink,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputMaskModule,
    KeyValuePipe,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  formGroup!: FormGroup;
  private readonly auth = inject(Auth);

  constructor(public layoutService: LayoutService) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  getErrorMessage(errors: any): string {
    if (!errors) return '';

    if (errors['email']) {
      return 'Please enter a valid email address.';
    }

    return 'Invalid input.';
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

  onLoginWithEmailAndPassword() {
    if (this.formGroup.valid) {
      signInWithEmailAndPassword(this.auth, this.email!.value, this.password!.value);
    }
  }
}
