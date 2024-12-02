import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SoftwareDevAgencyV3Component } from './software-dev-agency-v3.component'

describe('SoftwareDevAgencyV3Component', () => {
  let component: SoftwareDevAgencyV3Component
  let fixture: ComponentFixture<SoftwareDevAgencyV3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SoftwareDevAgencyV3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
