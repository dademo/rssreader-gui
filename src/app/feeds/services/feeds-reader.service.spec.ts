import { TestBed } from '@angular/core/testing';

import { FeedsReaderService } from './feeds-reader.service';

describe('FeedsReaderService', () => {
  let service: FeedsReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
