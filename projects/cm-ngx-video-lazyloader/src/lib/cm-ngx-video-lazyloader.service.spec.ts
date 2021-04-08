import { TestBed } from '@angular/core/testing';

import { CmNgxVideoLazyloaderService } from './cm-ngx-video-lazyloader.service';

describe('CmNgxVideoLazyloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmNgxVideoLazyloaderService = TestBed.get(CmNgxVideoLazyloaderService);
    expect(service).toBeTruthy();
  });
});
