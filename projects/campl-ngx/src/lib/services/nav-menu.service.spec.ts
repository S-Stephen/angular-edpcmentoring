import { TestBed } from '@angular/core/testing';

import { NavMenuService } from './nav-menu.service';
import { NavMenuConfigService } from './nav-menu-config.service';

describe('NavMenuService', () => {
  beforeEach(() => {
    const navMenuConfig: any = {};
    TestBed.configureTestingModule({
      providers: [
        NavMenuService,
        {
          provide: NavMenuConfigService,
          useValue: navMenuConfig
        }
      ]
    });
  });

  it('should be created', () => {
    const service: NavMenuService = TestBed.get(NavMenuService);
    expect(service).toBeTruthy();
  });
});
