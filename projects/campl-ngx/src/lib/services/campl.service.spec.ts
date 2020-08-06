import { TestBed } from '@angular/core/testing';

import { CamplService } from './campl.service';
import { CamplConfigService } from './campl-config.service';

describe('CamplService', () => {
  beforeEach(() => {
    const camplConfig: any = {};
    TestBed.configureTestingModule({
      providers: [
        CamplService,
        {
          provide: CamplConfigService,
          useValue: camplConfig
        }
      ]
    });
  });

  it('should be created', () => {
    const service: CamplService = TestBed.get(CamplService);
    expect(service).toBeTruthy();
  });
});
