import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjectFeatureComponent } from './project-feature.component'

describe('ProjectFeatureComponent', () => {
  let component: ProjectFeatureComponent
  let fixture: ComponentFixture<ProjectFeatureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFeatureComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProjectFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
