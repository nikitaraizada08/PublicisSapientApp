import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCountdownTimerComponent } from './subject-countdown-timer.component';

describe('SubjectCountdownTimerComponent', () => {
  let component: SubjectCountdownTimerComponent;
  let fixture: ComponentFixture<SubjectCountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCountdownTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
