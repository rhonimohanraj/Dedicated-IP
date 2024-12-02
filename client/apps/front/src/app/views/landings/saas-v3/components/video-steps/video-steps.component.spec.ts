import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VideoStepsComponent } from './video-steps.component'

describe('VideoStepsComponent', () => {
  let component: VideoStepsComponent
  let fixture: ComponentFixture<VideoStepsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoStepsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VideoStepsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
