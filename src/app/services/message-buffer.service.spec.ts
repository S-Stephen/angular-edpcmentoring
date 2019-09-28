import { TestBed } from '@angular/core/testing';

import { MessageBufferService } from './message-buffer.service';

describe('MessageBufferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageBufferService = TestBed.get(MessageBufferService);
    expect(service).toBeTruthy();
  });
});
