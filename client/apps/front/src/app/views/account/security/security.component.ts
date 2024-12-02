import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './security.component.html',
  styles: ``,
})
export class SecurityComponent {
  securityForm!: UntypedFormGroup
  submit!: boolean
  currentpwdType: string = 'password'
  newpwdType: string = 'password'
  confirmpwdType: string = 'password'

  public fb = inject(UntypedFormBuilder)
  public renderer = inject(Renderer2)

  constructor() {
    this.securityForm = this.fb.group({
      currentpwd: ['jonnyPass', [Validators.required]],
      newpwd: ['', [Validators.required]],
      confirmpwd: ['', [Validators.required]],
      newcheck: [''],
    })
  }

  submitForm() {
    if (this.securityForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.securityvalidation'),
        'was-validated'
      )
    }
  }

  chagePasswordType(event: any) {
    this.currentpwdType = event.target.checked ? 'text' : 'password'
  }

  chageNewPasswordType(event: any) {
    this.newpwdType = event.target.checked ? 'text' : 'password'
  }

  chageConfirmPasswordType(event: any) {
    this.confirmpwdType = event.target.checked ? 'text' : 'password'
  }
}
