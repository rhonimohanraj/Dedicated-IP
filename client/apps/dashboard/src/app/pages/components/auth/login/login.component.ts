import { Component, importProvidersFrom, inject, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
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
import { KeyValuePipe } from '@angular/common';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;

@Component({
  imports: [
    RouterLink,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputMaskModule,
    KeyValuePipe,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  public readonly layoutService = inject(LayoutService);
  private readonly messageService = inject(MessageService);

  formGroup!: FormGroup;

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

  get dark(): boolean {
    return this.layoutService.config().colorScheme !== 'light';
  }

  async onLoginWithEmailAndPassword(): Promise<void> {
    if (this.formGroup.valid) {
      try{
        const result = await signInWithEmailAndPassword(
          this.auth,
          this.email!.value,
          this.password!.value,
        );
        console.log(result);
        if (result.user) {
          await this.router.navigate(['/']);
        }
      }
      catch (error: unknown) {
        if((error as firebase.FirebaseError).code) {
            this.messageService.add({
              severity: 'error',
              summary: 'Login failed',
              detail: (error as firebase.FirebaseError).message,
            });
          }
        }
    }
  }
}
