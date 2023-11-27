import { TestBed } from '@angular/core/testing';

import { MangakaService } from './mangaka.service';

describe('MangakaService', () => {
  let service: MangakaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangakaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
