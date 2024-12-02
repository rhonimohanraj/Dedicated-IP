import { CommonModule } from '@angular/common'
import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'mobile-show-case-subscribe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './subscribe.component.html',
  styles: ``,
})
export class SubscribeComponent {
  contactForm!: UntypedFormGroup
  submit!: boolean

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  // return forms
  get form() {
    return this.contactForm.controls
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }
}
