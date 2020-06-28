import { TestBed } from '@angular/core/testing';

import { CadreServiceService } from './cadre-service.service';

describe('CadreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadreServiceService = TestBed.get(CadreServiceService);
    expect(service).toBeTruthy();
  });
});
