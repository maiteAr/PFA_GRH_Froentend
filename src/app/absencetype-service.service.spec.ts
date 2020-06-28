import { TestBed } from '@angular/core/testing';

import { AbsencetypeServiceService } from './absencetype-service.service';

describe('AbsencetypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbsencetypeServiceService = TestBed.get(AbsencetypeServiceService);
    expect(service).toBeTruthy();
  });
});
