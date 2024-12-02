import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SoftwareDevAgencyV1Component } from './software-dev-agency-v1.component'

describe('SoftwareDevAgencyV1Component', () => {
  let component: SoftwareDevAgencyV1Component
  let fixture: ComponentFixture<SoftwareDevAgencyV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SoftwareDevAgencyV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
