import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSignUpComponent } from './event-sign-up.component';

describe('EventSignUpComponent', () => {
  let component: EventSignUpComponent;
  let fixture: ComponentFixture<EventSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
