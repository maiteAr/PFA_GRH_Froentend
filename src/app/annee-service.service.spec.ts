import { TestBed } from '@angular/core/testing';

import { AnneeServiceService } from './annee-service.service';

describe('AnneeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnneeServiceService = TestBed.get(AnneeServiceService);
    expect(service).toBeTruthy();
  });
});
