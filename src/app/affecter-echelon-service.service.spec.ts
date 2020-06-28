import { TestBed } from '@angular/core/testing';

import { AffecterEchelonServiceService } from './affecter-echelon-service.service';

describe('AffecterEchelonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffecterEchelonServiceService = TestBed.get(AffecterEchelonServiceService);
    expect(service).toBeTruthy();
  });
});
