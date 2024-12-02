import { Component, inject, Input, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form
      (ngSubmit)="submitForm()"
      [formGroup]="subscriptionForm"
      class="needs-validation subscribe-form"
      novalidate
    >
      @if (label) {
        <label for="subscr-email" class="form-label">{{ label }}</label>
      }
      <div class="input-group">
        <input
          type="email"
          formControlName="email"
          id="subscr-email"
          class="form-control rounded-start ps-5"
          placeholder="Your email"
          required
        />
        <i
          class="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
        ></i>
        <div class="invalid-tooltip position-absolute top-100 start-0">
          Please provide a valid email address.
        </div>
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class SubscribeFormComponent {
  @Input() label!: string
  submit: boolean = false

  subscriptionForm!: UntypedFormGroup

  private fb = inject(UntypedFormBuilder)
  public renderer = inject(Renderer2)

  constructor() {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  submitForm() {
    if (this.subscriptionForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.subscribe-form'),
        'was-validated'
      )
    }
  }
}
