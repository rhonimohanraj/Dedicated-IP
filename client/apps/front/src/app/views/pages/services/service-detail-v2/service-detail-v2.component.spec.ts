import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ServiceDetailV2Component } from './service-detail-v2.component'

describe('ServiceDetailV2Component', () => {
  let component: ServiceDetailV2Component
  let fixture: ComponentFixture<ServiceDetailV2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailV2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ServiceDetailV2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
