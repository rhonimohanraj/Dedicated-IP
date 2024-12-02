import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListNoSidebarComponent } from './list-no-sidebar.component'

describe('ListNoSidebarComponent', () => {
  let component: ListNoSidebarComponent
  let fixture: ComponentFixture<ListNoSidebarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNoSidebarComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ListNoSidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
