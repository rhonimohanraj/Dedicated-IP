import { Component, Renderer2, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
@Component({
  selector: 'service-v2-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './contact-form.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class ContactFormComponent {
  contactForm!: UntypedFormGroup
  submit!: boolean

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      people: ['', [Validators.required]],
      message: ['', [Validators.required]],
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
