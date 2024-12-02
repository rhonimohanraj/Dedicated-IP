import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MoreFeatureComponent } from './more-feature.component'

describe('MoreFeatureComponent', () => {
  let component: MoreFeatureComponent
  let fixture: ComponentFixture<MoreFeatureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreFeatureComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MoreFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
