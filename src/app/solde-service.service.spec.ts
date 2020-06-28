import { TestBed } from '@angular/core/testing';

import { SoldeServiceService } from './solde-service.service';

describe('SoldeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldeServiceService = TestBed.get(SoldeServiceService);
    expect(service).toBeTruthy();
  });
});
