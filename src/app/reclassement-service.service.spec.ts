import { TestBed } from '@angular/core/testing';

import { ReclassementServiceService } from './reclassement-service.service';

describe('ReclassementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReclassementServiceService = TestBed.get(ReclassementServiceService);
    expect(service).toBeTruthy();
  });
});
