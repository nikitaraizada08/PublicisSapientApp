import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStartPauseDisplayComponent } from './subject-start-pause-display.component';

describe('SubjectStartPauseDisplayComponent', () => {
  let component: SubjectStartPauseDisplayComponent;
  let fixture: ComponentFixture<SubjectStartPauseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStartPauseDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStartPauseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
