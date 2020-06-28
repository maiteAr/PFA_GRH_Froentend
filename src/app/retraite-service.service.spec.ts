import { TestBed } from '@angular/core/testing';

import { RetraiteServiceService } from './retraite-service.service';

describe('RetraiteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetraiteServiceService = TestBed.get(RetraiteServiceService);
    expect(service).toBeTruthy();
  });
});
