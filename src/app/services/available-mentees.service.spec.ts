import { TestBed } from '@angular/core/testing';

import { AvailableMenteesService } from './available-mentees.service';

describe('AvailableMenteesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableMenteesService = TestBed.get(AvailableMenteesService);
    expect(service).toBeTruthy();
  });
});
