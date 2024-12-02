import { Component, Renderer2, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'

@Component({
  selector: 'contact-v3-content',
  standalone: true,
  imports: [BreadcrumbComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styles: ``,
})
export class ContentComponent {
  public fb = inject(FormBuilder)
  public renderer = inject(Renderer2)
  contactForm!: UntypedFormGroup
  formSubmit!: boolean

  ngOnInit() {
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
