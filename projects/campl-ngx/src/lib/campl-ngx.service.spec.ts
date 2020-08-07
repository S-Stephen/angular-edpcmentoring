import { TestBed } from '@angular/core/testing';

import { CamplNgxService } from './campl-ngx.service';

describe('CamplNgxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgxService = TestBed.get(CamplNgxService);
    expect(service).toBeTruthy();
  });
});
