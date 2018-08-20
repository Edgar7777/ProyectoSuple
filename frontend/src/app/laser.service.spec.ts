import { TestBed, inject } from '@angular/core/testing';

import { LaserService } from './laser.service';

describe('LaserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaserService]
    });
  });

  it('should be created', inject([LaserService], (service: LaserService) => {
    expect(service).toBeTruthy();
  }));
});
