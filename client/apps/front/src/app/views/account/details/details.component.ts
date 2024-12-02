import { Component, inject, Renderer2 } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './details.component.html',
  styles: ``,
  providers: [provideNgxMask()],
})
export class DetailsComponent {
  basicForm!: UntypedFormGroup
  addressForm!: UntypedFormGroup
  submit!: boolean

  public fb = inject(UntypedFormBuilder)
  private renderer = inject(Renderer2)

  constructor() {
    this.basicForm = this.fb.group({
      fname: ['john', [Validators.required]],
      sname: ['doe', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      bio: [''],
    })

    this.addressForm = this.fb.group({
      country: ['USA', [Validators.required]],
      state: ['Florida', [Validators.required]],
      city: ['Miami', [Validators.required]],
      zipcode: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
    })
  }

  get basic() {
    return this.basicForm.controls
  }

  get address() {
    return this.addressForm.controls
  }

  basicformsubmit() {
    if (this.basicForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.basicvalidation'),
        'was-validated'
      )
    }
  }

  addressformsubmit() {
    if (this.basicForm.valid) {
      this.submit = true
    } else {
      this.renderer.addClass(
        document.querySelector('.addressvalidation'),
        'was-validated'
      )
    }
  }
}
