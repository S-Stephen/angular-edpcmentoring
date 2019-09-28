import { TestBed } from '@angular/core/testing';

import { AvailableSeekersService } from './available-seekers.service';

describe('AvailableSeekersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableSeekersService = TestBed.get(AvailableSeekersService);
    expect(service).toBeTruthy();
  });
});
