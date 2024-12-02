import { CommonModule } from '@angular/common'
import {
  Component,
  inject,
  Renderer2,
  ViewChild,
  type ElementRef,
} from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'software-dev-agency2-cta',
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
