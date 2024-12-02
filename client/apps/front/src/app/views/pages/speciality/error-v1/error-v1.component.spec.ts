import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorV1Component } from './error-v1.component'

describe('ErrorV1Component', () => {
  let component: ErrorV1Component
  let fixture: ComponentFixture<ErrorV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ErrorV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
