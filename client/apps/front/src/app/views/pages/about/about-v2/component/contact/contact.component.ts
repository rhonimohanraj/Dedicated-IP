import { group } from '@angular/animations'
import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, Renderer2, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'about-v2-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  contactForm!: FormGroup
  formSubmit!: boolean
  public renderer = inject(Renderer2)
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
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
}
