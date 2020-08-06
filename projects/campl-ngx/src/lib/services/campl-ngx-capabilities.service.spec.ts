import { TestBed } from '@angular/core/testing';

import { CamplNgxCapabilitiesService } from './campl-ngx-capabilities.service';

describe('CamplNgxCapabilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgxCapabilitiesService = TestBed.get(
      CamplNgxCapabilitiesService
    );
    expect(service).toBeTruthy();
  });
});
