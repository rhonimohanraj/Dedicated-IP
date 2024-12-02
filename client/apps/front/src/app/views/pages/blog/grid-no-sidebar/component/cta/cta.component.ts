import { CommonModule } from '@angular/common'
import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
  inject,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'grid-no-sidebar-cta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cta.component.html',
  styles: ``,
})
export class CtaComponent {
  ctaForm!: FormGroup
  formSubmit: boolean = false

  public renderer = inject(Renderer2)
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ctaForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  // get Form value
  get formValues() {
    return this.ctaForm.controls
  }

  onSubmit() {
    if (this.ctaForm.valid) {
      this.formSubmit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.needs-validation'),
        'was-validated'
      )
    }
  }
}
