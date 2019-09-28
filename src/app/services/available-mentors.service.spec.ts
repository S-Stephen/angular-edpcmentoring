import { TestBed } from '@angular/core/testing';

import { AvailableMentorsService } from './available-mentors.service';

describe('AvailableMentorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableMentorsService = TestBed.get(AvailableMentorsService);
    expect(service).toBeTruthy();
  });
});
