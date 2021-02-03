import { TestBed } from '@angular/core/testing';

import { FeedsConfigurationService } from './feeds-configuration.service';

describe('FeedsConfigurationService', () => {
  let service: FeedsConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
