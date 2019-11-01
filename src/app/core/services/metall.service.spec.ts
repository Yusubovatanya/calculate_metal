import { TestBed } from '@angular/core/testing';

import { MetallService } from './metall.service';

describe('MetallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetallService = TestBed.get(MetallService);
    expect(service).toBeTruthy();
  });
});
