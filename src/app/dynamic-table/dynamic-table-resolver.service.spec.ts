import { TestBed } from '@angular/core/testing';

import { DynamicTableResolverService } from './dynamic-table-resolver.service';

describe('DynamicTableResolverService', () => {
  let service: DynamicTableResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicTableResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
