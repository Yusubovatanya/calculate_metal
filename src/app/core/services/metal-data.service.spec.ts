import { TestBed } from '@angular/core/testing';
import { MetalDataService } from './metal-data.service';



describe('MetallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetalDataService = TestBed.get(MetalDataService);
    expect(service).toBeTruthy();
  });
});
