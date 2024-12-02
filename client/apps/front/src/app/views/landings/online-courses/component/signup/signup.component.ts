import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'online-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styles: ``,
})
export class SignupComponent {
  signupForm!: UntypedFormGroup
  submit: boolean = false
  currentpwdType: string = 'password'

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  chagePasswordType(event: any) {
    this.currentpwdType = event.target.checked ? 'text' : 'password'
  }

  submitForm() {
    if (this.signupForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.signupvalidate'),
        'was-validated'
      )
    }
  }
}
