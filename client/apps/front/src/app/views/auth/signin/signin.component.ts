import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { Store } from '@ngrx/store'
import { credits } from '@states/constants'
import { login } from 'src/app/store/authentication/authentication.actions'

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [TopbarComponent, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styles: `
    :host(app-signin) {
      display: contents;
    }
  `,
})
export class SigninComponent {
  loginForm!: FormGroup
  creditsBy = credits
  formSubmitted: boolean = false
  showPassword: boolean = false
  store = inject(Store)
  passwordType: string = 'password'

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['user@email.com', [Validators.required, Validators.email]],
      password: ['password', Validators.required],
    })
  }

  /**
   * convenience getter for easy access to form fields
   */
  get formValues() {
    return this.loginForm.controls
  }

  /**
   * On submit form
   */
  onSubmit(): void {
    this.formSubmitted = true
    if (this.loginForm.valid) {
      const email = this.formValues['email'].value // Get the username from the form
      const password = this.formValues['password'].value // Get the password from the form

      // Login Api
      this.store.dispatch(login({ email: email, password: password }))
    }
  }

  changePasswordType(event: any) {
    this.passwordType = event.target.checked ? 'text' : 'password'
  }
}
