import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputCountdownTimerComponent } from './input-output-countdown-timer.component';

describe('InputOutputCountdownTimerComponent', () => {
  let component: InputOutputCountdownTimerComponent;
  let fixture: ComponentFixture<InputOutputCountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputCountdownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
