import { TestBed } from '@angular/core/testing';

import { EchelleServiceService } from './echelle-service.service';

describe('EchelleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EchelleServiceService = TestBed.get(EchelleServiceService);
    expect(service).toBeTruthy();
  });
});
