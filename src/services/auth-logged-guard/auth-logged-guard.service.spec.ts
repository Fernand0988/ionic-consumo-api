import { TestBed } from '@angular/core/testing';

import { AuthLoggedGuardService } from './auth-logged-guard.service';

describe('AuthLoggedGuardService', () => {
  let service: AuthLoggedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLoggedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
