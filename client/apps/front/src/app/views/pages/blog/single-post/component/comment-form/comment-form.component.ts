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
  selector: 'single-post-comment-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styles: ``,
})
export class CommentFormComponent {
  contactForm!: FormGroup
  formSubmit!: boolean

  submit: boolean = false

  subscriptionForm!: UntypedFormGroup
  constructor(
    private fb: FormBuilder,
    private formb: FormBuilder
  ) {}
  public renderer = inject(Renderer2)

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
    })

    this.subscriptionForm = this.formb.group({
      emails: ['', [Validators.required, Validators.email]],
    })
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
