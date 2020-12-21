import { TestBed } from '@angular/core/testing';

import { RotasUrlService } from './rotas-url.service';

describe('RotasUrlService', () => {
  let service: RotasUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotasUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
