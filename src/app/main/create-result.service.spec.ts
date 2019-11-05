import { TestBed } from '@angular/core/testing';

import { CreateResultService } from './create-result.service';

describe('CreateResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateResultService = TestBed.get(CreateResultService);
    expect(service).toBeTruthy();
  });
});
