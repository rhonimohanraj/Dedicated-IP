import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { TopbarComponent } from '@components/topbar/topbar.component'
import { credits } from '@states/constants'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [TopbarComponent, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styles: `
    :host(app-signup) {
      display: contents;
    }
  `,
})
export class SignupComponent {
  signupForm!: UntypedFormGroup
  submit!: boolean
  creditsBy = credits
  passwordType: string = 'password'
  confirmpasswordType: string = 'password'

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpwd: ['', [Validators.required]],
    })
  }
  signup() {
    if (this.signupForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }

  changePasswordType(event: any) {
    this.passwordType = event.target.checked ? 'text' : 'password'
  }

  changeconfirmPasswordType(event: any) {
    this.confirmpasswordType = event.target.checked ? 'text' : 'password'
  }
}
