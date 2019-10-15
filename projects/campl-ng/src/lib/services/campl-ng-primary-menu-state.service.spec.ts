import { TestBed } from '@angular/core/testing';

import { CamplNgPrimaryMenuStateService } from './campl-ng-primary-menu-state.service';

describe('CamplNgPrimaryMenuStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgPrimaryMenuStateService = TestBed.get(CamplNgPrimaryMenuStateService);
    expect(service).toBeTruthy();
  });
});
