import { TestBed } from '@angular/core/testing';

import { NavMenuConfigServiceService } from './nav-menu-config-service.service';

describe('NavMenuConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavMenuConfigServiceService = TestBed.get(NavMenuConfigServiceService);
    expect(service).toBeTruthy();
  });
});
