import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SimpleFeedComponent } from './simple-feed.component'

describe('SimpleFeedComponent', () => {
  let component: SimpleFeedComponent
  let fixture: ComponentFixture<SimpleFeedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFeedComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SimpleFeedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
