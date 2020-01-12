import { TestBed } from '@angular/core/testing';

import { FetchMeService } from './fetch-me.service';

describe('FetchMeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchMeService = TestBed.get(FetchMeService);
    expect(service).toBeTruthy();
  });
});
