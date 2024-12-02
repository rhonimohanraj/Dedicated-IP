import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SoftwareDevAgencyV2Component } from './software-dev-agency-v2.component'

describe('SoftwareDevAgencyV2Component', () => {
  let component: SoftwareDevAgencyV2Component
  let fixture: ComponentFixture<SoftwareDevAgencyV2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(SoftwareDevAgencyV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
