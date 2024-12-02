import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CtaTicketComponent } from './cta-ticket.component'

describe('CtaTicketComponent', () => {
  let component: CtaTicketComponent
  let fixture: ComponentFixture<CtaTicketComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaTicketComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CtaTicketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
