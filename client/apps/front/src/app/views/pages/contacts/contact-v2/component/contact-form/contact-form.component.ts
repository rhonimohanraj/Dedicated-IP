import { Component, Renderer2, inject } from '@angular/core'
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'contact-v2-contact-form',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: './contact-form.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class ContactFormComponent {
  contactForm!: UntypedFormGroup
  public fb = inject(FormBuilder)
  public renderer = inject(Renderer2)
  formSubmit!: boolean

  constructor() {
    this.contactForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/),
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
      specialist: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }
}
