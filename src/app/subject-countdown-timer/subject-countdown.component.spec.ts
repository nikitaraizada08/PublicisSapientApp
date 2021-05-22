import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCountdownComponent } from './subject-countdown.component';

describe('SubjectCountdownComponent', () => {
  let component: SubjectCountdownComponent;
  let fixture: ComponentFixture<SubjectCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
