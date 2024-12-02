import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
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
  selector: 'grid-sidebar-cta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cta.component.html',
  styles: ``,
})
export class CtaComponent implements OnInit {
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
