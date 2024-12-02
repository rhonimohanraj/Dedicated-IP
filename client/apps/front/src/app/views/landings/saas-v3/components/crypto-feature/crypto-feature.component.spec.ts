import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CryptoFeatureComponent } from './crypto-feature.component'

describe('CryptoFeatureComponent', () => {
  let component: CryptoFeatureComponent
  let fixture: ComponentFixture<CryptoFeatureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoFeatureComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CryptoFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
