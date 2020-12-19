import { TestBed } from '@angular/core/testing';

import { DatabaseCRUDService } from './database-crud.service';

describe('DatabaseCRUDService', () => {
  let service: DatabaseCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
