import { TestBed } from '@angular/core/testing';

import { CamplService } from './campl.service';

describe('CamplService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplService = TestBed.get(CamplService);
    expect(service).toBeTruthy();
  });
});
