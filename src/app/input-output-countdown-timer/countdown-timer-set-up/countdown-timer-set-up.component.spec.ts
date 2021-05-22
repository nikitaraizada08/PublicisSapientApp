import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerSetUpComponent } from './countdown-timer-set-up.component';

describe('CountdownTimerSetUpComponent', () => {
  let component: CountdownTimerSetUpComponent;
  let fixture: ComponentFixture<CountdownTimerSetUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimerSetUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
