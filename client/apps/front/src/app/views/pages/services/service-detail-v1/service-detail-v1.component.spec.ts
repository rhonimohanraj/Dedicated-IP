import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ServiceDetailV1Component } from './service-detail-v1.component'

describe('ServiceDetailV1Component', () => {
  let component: ServiceDetailV1Component
  let fixture: ComponentFixture<ServiceDetailV1Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailV1Component],
    }).compileComponents()

    fixture = TestBed.createComponent(ServiceDetailV1Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
