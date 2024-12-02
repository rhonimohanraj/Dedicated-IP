import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MobileShowcaseV3Component } from './mobile-showcase-v3.component'

describe('MobileShowcaseV3Component', () => {
  let component: MobileShowcaseV3Component
  let fixture: ComponentFixture<MobileShowcaseV3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowcaseV3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(MobileShowcaseV3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
