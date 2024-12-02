import { Component, Renderer2, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'service-v1-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styles: ``,
})
export class ContactFormComponent {
  contactForm!: UntypedFormGroup
  public fb = inject(UntypedFormBuilder)
  formGroup!: boolean
  public renderer = inject(Renderer2)

  constructor() {
    this.contactForm = this.fb.group({
      service: ['', Validators.required],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formGroup = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }
}
