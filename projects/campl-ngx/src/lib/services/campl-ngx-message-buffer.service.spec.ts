import { TestBed } from '@angular/core/testing';

import { CamplNgxMessageBufferService } from './campl-ngx-message-buffer.service';

describe('CamplNgxMessageBufferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamplNgxMessageBufferService = TestBed.get(CamplNgxMessageBufferService);
    expect(service).toBeTruthy();
  });
});
