import { TestBed } from '@angular/core/testing';

import { NavMenuServiceService } from './nav-menu-service.service';

describe('NavMenuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavMenuServiceService = TestBed.get(NavMenuServiceService);
    expect(service).toBeTruthy();
  });
});
