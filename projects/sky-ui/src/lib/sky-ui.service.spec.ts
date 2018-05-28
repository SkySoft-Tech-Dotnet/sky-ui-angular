import { TestBed, inject } from '@angular/core/testing';

import { SkyUiService } from './sky-ui.service';

describe('SkyUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkyUiService]
    });
  });

  it('should be created', inject([SkyUiService], (service: SkyUiService) => {
    expect(service).toBeTruthy();
  }));
});
