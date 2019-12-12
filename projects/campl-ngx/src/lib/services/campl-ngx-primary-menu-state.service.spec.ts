import { TestBed } from '@angular/core/testing';

import { CamplNgxPrimaryMenuStateService } from './campl-ngx-primary-menu-state.service';

describe('CamplNgxPrimaryMenuStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgxPrimaryMenuStateService = TestBed.get(CamplNgxPrimaryMenuStateService);
    expect(service).toBeTruthy();
  });
});
