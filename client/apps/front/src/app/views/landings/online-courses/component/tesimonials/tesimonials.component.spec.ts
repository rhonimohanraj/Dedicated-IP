import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TesimonialsComponent } from './tesimonials.component'

describe('TesimonialsComponent', () => {
  let component: TesimonialsComponent
  let fixture: ComponentFixture<TesimonialsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesimonialsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TesimonialsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
