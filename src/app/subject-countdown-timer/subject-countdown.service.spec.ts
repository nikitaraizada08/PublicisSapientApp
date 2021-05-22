import { TestBed } from '@angular/core/testing';

import { SubjectCountdownService } from './subject-countdown.service';

describe('SubjectCountdownService', () => {
  let service: SubjectCountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectCountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
