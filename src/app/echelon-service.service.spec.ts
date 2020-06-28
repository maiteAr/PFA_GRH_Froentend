import { TestBed } from '@angular/core/testing';

import { EchelonServiceService } from './echelon-service.service';

describe('EchelonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EchelonServiceService = TestBed.get(EchelonServiceService);
    expect(service).toBeTruthy();
  });
});
