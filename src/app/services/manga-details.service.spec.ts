import { TestBed } from '@angular/core/testing';

import { MangaDetailsService } from './manga-details.service';

describe('MangaDetailsService', () => {
  let service: MangaDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
