import { TestBed } from '@angular/core/testing';

import { JourFeriersServiceService } from './jour-feriers-service.service';

describe('JourFeriersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JourFeriersServiceService = TestBed.get(JourFeriersServiceService);
    expect(service).toBeTruthy();
  });
});
