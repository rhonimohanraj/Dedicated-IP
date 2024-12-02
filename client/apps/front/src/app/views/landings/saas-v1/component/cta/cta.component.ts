import { CommonModule } from '@angular/common'
import { Component, Renderer2, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'saas1-cta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cta.component.html',
  styles: ``,
})
export class CtaComponent {
  contactForm!: UntypedFormGroup
  submit!: boolean

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required]],
    })
  }

  // return forms
  get form() {
    return this.contactForm.controls
  }

  submitForm() {
    this.submit = true
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
