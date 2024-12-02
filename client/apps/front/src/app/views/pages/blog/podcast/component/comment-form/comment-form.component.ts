import { Component, Renderer2, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'podcast-comment-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styles: ``,
})
export class CommentFormComponent {
  contactForm!: FormGroup
  formSubmit!: boolean
  subscriptionForm!: UntypedFormGroup
  submit: boolean = false
  constructor(private fb: FormBuilder) {}
  public renderer = inject(Renderer2)

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    })

    this.subscriptionForm = this.fb.group({
      emails: ['', [Validators.required, Validators.email]],
    })
  }

  // get Form value
  get formValues() {
    return this.contactForm.controls
  }

  // on Submit
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

  submitForm() {
    if (this.subscriptionForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.post-form'),
        'was-validated'
      )
    }
  }
}
