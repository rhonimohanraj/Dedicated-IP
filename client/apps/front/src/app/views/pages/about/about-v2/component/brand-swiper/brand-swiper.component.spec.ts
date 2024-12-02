import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BrandSwiperComponent } from './brand-swiper.component'

describe('BrandSwiperComponent', () => {
  let component: BrandSwiperComponent
  let fixture: ComponentFixture<BrandSwiperComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSwiperComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BrandSwiperComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
