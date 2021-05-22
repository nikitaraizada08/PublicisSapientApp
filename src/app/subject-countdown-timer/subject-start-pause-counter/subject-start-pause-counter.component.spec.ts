import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStartPauseCounterComponent } from './subject-start-pause-counter.component';

describe('SubjectStartPauseCounterComponent', () => {
  let component: SubjectStartPauseCounterComponent;
  let fixture: ComponentFixture<SubjectStartPauseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStartPauseCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStartPauseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
