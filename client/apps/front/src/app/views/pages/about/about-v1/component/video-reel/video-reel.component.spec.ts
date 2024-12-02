import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VideoReelComponent } from './video-reel.component'

describe('VideoReelComponent', () => {
  let component: VideoReelComponent
  let fixture: ComponentFixture<VideoReelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoReelComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VideoReelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
