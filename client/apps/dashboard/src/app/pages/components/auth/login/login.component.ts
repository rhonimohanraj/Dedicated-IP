import { Component, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../../layout/service/app.layout.service';
import { RouterLink } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  imports: [
    RouterLink,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputMaskModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor(public layoutService: LayoutService) {
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
}
