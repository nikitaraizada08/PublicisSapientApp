import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStopTimerComponent } from './start-stop-timer.component';

describe('StartStopTimerComponent', () => {
  let component: StartStopTimerComponent;
  let fixture: ComponentFixture<StartStopTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartStopTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStopTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
