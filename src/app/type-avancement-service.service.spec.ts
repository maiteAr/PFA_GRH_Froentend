import { TestBed } from '@angular/core/testing';

import { TypeAvancementServiceService } from './type-avancement-service.service';

describe('TypeAvancementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeAvancementServiceService = TestBed.get(TypeAvancementServiceService);
    expect(service).toBeTruthy();
  });
});
