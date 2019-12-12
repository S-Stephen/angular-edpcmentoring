import { TestBed } from '@angular/core/testing';

import { CamplNgxLocalmenuService } from './campl-ngx-localmenu.service';

describe('CamplNgxLocalmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgxLocalmenuService = TestBed.get(CamplNgxLocalmenuService);
    expect(service).toBeTruthy();
  });
});
