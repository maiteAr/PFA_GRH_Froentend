import { TestBed } from '@angular/core/testing';

import { CaisseServiceService } from './caisse-service.service';

describe('CaisseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaisseServiceService = TestBed.get(CaisseServiceService);
    expect(service).toBeTruthy();
  });
});
