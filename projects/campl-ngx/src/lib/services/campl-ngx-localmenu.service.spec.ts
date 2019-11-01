import { TestBed } from '@angular/core/testing';

import { CamplNgLocalmenuService } from './campl-ngx-localmenu.service';

describe('CamplNgLocalmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgLocalmenuService = TestBed.get(CamplNgLocalmenuService);
    expect(service).toBeTruthy();
  });
});
