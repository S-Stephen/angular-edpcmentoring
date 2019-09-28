import { TestBed } from '@angular/core/testing';

import { CamplConfigService } from './campl-config.service';

describe('CamplConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplConfigService = TestBed.get(CamplConfigService);
    expect(service).toBeTruthy();
  });
});
