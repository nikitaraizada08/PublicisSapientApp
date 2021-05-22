import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCountdownTimerSetupComponent } from './subject-countdown-timer-setup.component';

describe('SubjectCountdownTimerSetupComponent', () => {
  let component: SubjectCountdownTimerSetupComponent;
  let fixture: ComponentFixture<SubjectCountdownTimerSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCountdownTimerSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCountdownTimerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
