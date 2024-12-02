import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GridNoSidebarComponent } from './grid-no-sidebar.component'

describe('GridNoSidebarComponent', () => {
  let component: GridNoSidebarComponent
  let fixture: ComponentFixture<GridNoSidebarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridNoSidebarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GridNoSidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
