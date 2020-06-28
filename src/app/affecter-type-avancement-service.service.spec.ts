import { TestBed } from '@angular/core/testing';

import { AffecterTypeAvancementServiceService } from './affecter-type-avancement-service.service';

describe('AffecterTypeAvancementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffecterTypeAvancementServiceService = TestBed.get(AffecterTypeAvancementServiceService);
    expect(service).toBeTruthy();
  });
});
